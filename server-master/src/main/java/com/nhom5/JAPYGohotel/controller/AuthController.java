package com.nhom5.JAPYGohotel.controller;

import com.nhom5.JAPYGohotel.exception.UserAlreadyExistsException;
import com.nhom5.JAPYGohotel.model.User;
import com.nhom5.JAPYGohotel.request.LoginRequest;
import com.nhom5.JAPYGohotel.response.JwtResponse;
import com.nhom5.JAPYGohotel.security.jwt.JwtUtils;
import com.nhom5.JAPYGohotel.security.user.HotelUserDetails;
import com.nhom5.JAPYGohotel.service.IUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
// import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpHeaders;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final IUserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            return ResponseEntity.ok("Registration successful!");

        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtTokenForUser(authentication);
        HotelUserDetails userDetails = (HotelUserDetails) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        // Tạo HTTP-Only cookie chứa JWT
        ResponseCookie jwtCookie = ResponseCookie.from("token", jwt)
                .httpOnly(true)
                .secure(false) // Để thử nghiệm trên HTTP, đặt thành false. Đối với sản xuất, nên đặt thành
                               // true.
                .path("/") // Đảm bảo cookie được gửi trên tất cả các đường dẫn
                .maxAge(24 * 60 * 60) // Thời gian sống của cookie (1 ngày)
                .sameSite("Strict") // Thiết lập sameSite để tăng cường bảo mật
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
//                .header("Authorization", "Bearer " + jwt) // Thêm JWT vào tiêu đề phản hồi
                .body(new JwtResponse(
                        userDetails.getId(),
                        userDetails.getEmail(),
                        jwt,
                        roles));
    }

}
