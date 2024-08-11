import React from 'react';
import "./css/contact.css"
function Contact() {
  return (
    <div className="contact-us-page">
      <h1>Liên Hệ Với Chúng Tôi</h1>
      <hr />
      <div className="contact-info">
        <h3>Thông Tin Liên Hệ</h3>
        <p><strong>Địa chỉ:</strong> 159 Thùy Vân, Phường Thắng Tam, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu.</p>
        <p><strong>Số điện thoại:</strong> 0123456789</p>
        <p><strong>Email:</strong> japygohotel@gmail.com</p>
        <p>Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào, vui lòng liên hệ với chúng tôi.</p>
      </div>
      
      
      <div className="contact-form">
        <h3>Gửi Thông Tin Liên Hệ</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Họ và Tên:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Nội dung:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
