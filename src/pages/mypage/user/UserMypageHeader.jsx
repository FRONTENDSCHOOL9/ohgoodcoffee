import profile from '@assets/profile.svg';
import useUserStore from '@zustand/store';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function UserMypageHeader() {
  const { user } = useUserStore();
  const [activeMenu, setActiveMenu] = useState('주문 내역 조회'); // 초기값으로 '/mypage'를 설정

  // 클릭된 요소의 데이터 속성을 통해 활성화된 메뉴 항목을 식별하고 상태 업데이트
  const handleMenuClick = (e) => {
    const targetMenu = e.target.innerText;
    if (targetMenu) {
      setActiveMenu(targetMenu);
    }
  };

  return (
    <div className="container">
      <div className="l_wrapper">
        <div className="main-container">
          <div className="sidebar">
            <ul className="menu-list" onClick={handleMenuClick}>
              <li className={`menu-item ${activeMenu === '주문 내역 조회' ? 'is_active' : ''}`} data-menu-id="/mypage">
                <Link to="/mypage">주문 내역 조회</Link>
              </li>
              <li className={`menu-item ${activeMenu === '위시리스트' ? 'is_active' : ''}`} data-menu-id="/mypage/wishlist">
                <Link to="/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`menu-item ${activeMenu === '내가 쓴 리뷰' ? 'is_active' : ''}`} data-menu-id="/mypage/review">
                <Link to="/mypage/review">내가 쓴 리뷰</Link>
              </li>
              <li className={`menu-item ${activeMenu === '회원정보' ? 'is_active' : ''}`} data-menu-id="/mypage/userinfo">
                <Link to="/mypage/userinfo">회원정보</Link>
              </li>
            </ul>
            <ul className="menu-list-mo" onClick={handleMenuClick}>
              <li className={`menu-item ${activeMenu === '주문 내역 조회' ? 'is_active' : ''}`} data-menu-id="/mypage">
                <Link to="/mypage">주문 내역 조회</Link>
              </li>
              <li className={`menu-item ${activeMenu === '위시리스트' ? 'is_active' : ''}`} data-menu-id="/mypage/wishlist">
                <Link to="/mypage/wishlist">위시리스트</Link>
              </li>
              <li className={`menu-item ${activeMenu === '내가 쓴 리뷰' ? 'is_active' : ''}`} data-menu-id="/mypage/review">
                <Link to="/mypage/review">내가 쓴 리뷰</Link>
              </li>
              <li className={`menu-item ${activeMenu === '회원정보' ? 'is_active' : ''}`} data-menu-id="/mypage/userinfo">
                <Link to="/mypage/userinfo">회원정보</Link>
              </li>
            </ul>
          </div>
          <div className="inner">
            <div className="user-info">
              <div className="profile">
                <div className="profile-cover">
                  <img
                    className="profile-cover-src"
                    src={user.profileImage ? `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profileImage}` : profile}
                    alt="회원 프로필 사진"
                  />
                  <input type="file" style={{ display: 'none' }} />
                </div>
              </div>
              <div className="profile-content">
                <div className="profile-left">
                  <p>
                    <strong>{user.name}</strong>님 안녕하세요 :)
                  </p>
                  <p>누적 구매 금액 : 0원</p>
                </div>
                <p className="profile-type">{user.type}</p>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMypageHeader;
