import React from 'react'

function AdminFooter() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-section">
                        <h3 className="footer-heading">Bizim Haqqımızda</h3>
                        <p className="footer-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga itaque optio reprehenderit placeat numquam!
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Əlaqə</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">Telefon: +994 50 123 45 67</li>
                            <li className="footer-list-item">E-poçt: info@company.az</li>
                            <li className="footer-list-item">Ünvan: Bakı, Azərbaycan</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom-bar">
                    <p className="footer-bottom-text">
                        © 2024 Mirzow. Bütün hüquqlar qorunur.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default AdminFooter