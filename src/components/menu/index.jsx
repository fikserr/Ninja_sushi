import { NavLink } from "react-router-dom";
import Container from "../../layout/container";
import styles from "./menu.module.scss";

function Menu() {
  return (
    <div className={styles.menu}>
      <Container className={styles.menu__container}>
        <div className={styles.menu__content}>
          <NavLink to="/rolls" className={styles.menu__box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="36"
              viewBox="0 0 31 36"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.29178 4.77386C3.96374 6.17069 2.75 7.96108 2.75 9.75C2.75 11.5389 3.96374 13.3293 6.29178 14.7261C8.59991 16.111 11.8531 17 15.5 17C19.1469 17 22.4001 16.111 24.7082 14.7261C27.0363 13.3293 28.25 11.5389 28.25 9.75C28.25 7.96108 27.0363 6.17069 24.7082 4.77386C22.4001 3.38898 19.1469 2.5 15.5 2.5C11.8531 2.5 8.59991 3.38898 6.29178 4.77386ZM5.26279 3.05888C7.93117 1.45784 11.553 0.5 15.5 0.5C19.447 0.5 23.0688 1.45784 25.7372 3.05888C28.3857 4.64796 30.25 6.98257 30.25 9.75C30.25 12.5174 28.3857 14.852 25.7372 16.4411C23.0688 18.0422 19.447 19 15.5 19C11.553 19 7.93117 18.0422 5.26279 16.4411C2.61431 14.852 0.75 12.5174 0.75 9.75C0.75 6.98257 2.61431 4.64796 5.26279 3.05888Z"
                fill="#86868B"
              />
              <path
                className={styles.svg__hover}
                d="M23.75 9.75C23.75 12.0282 20.0563 13.875 15.5 13.875C10.9437 13.875 7.25 12.0282 7.25 9.75C7.25 7.47183 10.9437 5.625 15.5 5.625C20.0563 5.625 23.75 7.47183 23.75 9.75Z"
                fill="#9E9E9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.75 9.75014C0.75 9.75005 0.75 9.75 1.75 9.75C2.75 9.75 2.75 9.75005 2.75 9.75014V26.25C2.75 28.0389 3.96374 29.8293 6.29178 31.2261C8.59991 32.611 11.8531 33.5 15.5 33.5C19.1469 33.5 22.4001 32.611 24.7082 31.2261C27.0363 29.8293 28.25 28.0389 28.25 26.25V9.75H30.25V26.25C30.25 29.0174 28.3857 31.352 25.7372 32.9411C23.0688 34.5422 19.447 35.5 15.5 35.5C11.553 35.5 7.93117 34.5422 5.26279 32.9411C2.61431 31.352 0.75 29.0174 0.75 26.25V9.75014Z"
                fill="#86868B"
              />
            </svg>
            <p className={styles.menu__txt}>Роллы</p>
          </NavLink>
          <NavLink to="/sushi" className={styles.menu__box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.70618 18.2945C7.23404 18.1321 7.79363 18.4283 7.95604 18.9562L9.92758 25.3637C10.3171 26.6298 11.3083 27.6209 12.5744 28.0104L25.8681 32.1008C26.9159 32.4232 28.0501 32.3015 29.0055 31.764L38.135 26.6287C38.6164 26.3579 39.2261 26.5286 39.4968 27.01C39.7676 27.4914 39.5969 28.1011 39.1155 28.3718L29.986 33.5072C28.5529 34.3133 26.8516 34.496 25.28 34.0124L11.9862 29.922C10.087 29.3377 8.60038 27.851 8.01602 25.9518L6.04449 19.5444C5.88207 19.0165 6.17832 18.4569 6.70618 18.2945Z"
                fill="#86868B"
              />
              <path
                className={styles.svg__hover}
                d="M40.6272 29.6697C38.1596 26.8446 28.0583 23.7 19.9055 22.0694C9.59303 20.0069 -0.719467 22.0694 4.09303 14.5069C8.7189 7.23768 36.5958 5.42873 42.0206 28.1672C42.4627 30.0201 41.1617 30.2816 40.6272 29.6697Z"
                fill="#9E9E9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4622 9.38268C22.5961 9.91847 22.2704 10.4614 21.7346 10.5954C20.2854 10.9577 18.8733 12.015 17.613 13.582C16.3604 15.1394 15.3195 17.126 14.5965 19.1935C13.8729 21.2629 13.486 23.3614 13.5004 25.1288C13.5151 26.9389 13.9455 28.1972 14.619 28.8384C15.0191 29.2192 15.0346 29.8522 14.6538 30.2522C14.273 30.6522 13.6401 30.6678 13.2401 30.287C11.9778 29.0854 11.5167 27.1473 11.5005 25.1451C11.4838 23.1002 11.9264 20.7705 12.7086 18.5334C13.4914 16.2946 14.6327 14.0964 16.0546 12.3285C17.4688 10.5702 19.2236 9.16162 21.2495 8.6551C21.7853 8.52114 22.3282 8.84689 22.4622 9.38268ZM30.7279 12.1971C30.8261 12.7406 30.4652 13.2608 29.9217 13.3591C28.8157 13.559 27.539 14.2897 26.2672 15.4947C25.0084 16.6874 23.822 18.2822 22.8892 20.0805C21.0031 23.7166 20.2675 27.9427 21.7205 31.2197C21.9444 31.7245 21.7166 32.3153 21.2117 32.5392C20.7068 32.763 20.1161 32.5352 19.8922 32.0303C18.0923 27.9709 19.0871 23.067 21.1138 19.1596C22.1374 17.1862 23.453 15.4059 24.8917 14.0428C26.3174 12.6919 27.9337 11.686 29.566 11.3909C30.1095 11.2927 30.6297 11.6537 30.7279 12.1971Z"
                fill="#86868B"
              />
            </svg>
            <p className={styles.menu__txt}>Суши</p>
          </NavLink>
          <NavLink to="/sets" className={styles.menu__box}>
                
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="36"
              viewBox="0 0 31 36"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.29178 4.77386C3.96374 6.17069 2.75 7.96108 2.75 9.75C2.75 11.5389 3.96374 13.3293 6.29178 14.7261C8.59991 16.111 11.8531 17 15.5 17C19.1469 17 22.4001 16.111 24.7082 14.7261C27.0363 13.3293 28.25 11.5389 28.25 9.75C28.25 7.96108 27.0363 6.17069 24.7082 4.77386C22.4001 3.38898 19.1469 2.5 15.5 2.5C11.8531 2.5 8.59991 3.38898 6.29178 4.77386ZM5.26279 3.05888C7.93117 1.45784 11.553 0.5 15.5 0.5C19.447 0.5 23.0688 1.45784 25.7372 3.05888C28.3857 4.64796 30.25 6.98257 30.25 9.75C30.25 12.5174 28.3857 14.852 25.7372 16.4411C23.0688 18.0422 19.447 19 15.5 19C11.553 19 7.93117 18.0422 5.26279 16.4411C2.61431 14.852 0.75 12.5174 0.75 9.75C0.75 6.98257 2.61431 4.64796 5.26279 3.05888Z"
                fill="#86868B"
              />
              <path
                className={styles.svg__hover}
                d="M23.75 9.75C23.75 12.0282 20.0563 13.875 15.5 13.875C10.9437 13.875 7.25 12.0282 7.25 9.75C7.25 7.47183 10.9437 5.625 15.5 5.625C20.0563 5.625 23.75 7.47183 23.75 9.75Z"
                fill="#9E9E9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.75 9.75014C0.75 9.75005 0.75 9.75 1.75 9.75C2.75 9.75 2.75 9.75005 2.75 9.75014V26.25C2.75 28.0389 3.96374 29.8293 6.29178 31.2261C8.59991 32.611 11.8531 33.5 15.5 33.5C19.1469 33.5 22.4001 32.611 24.7082 31.2261C27.0363 29.8293 28.25 28.0389 28.25 26.25V9.75H30.25V26.25C30.25 29.0174 28.3857 31.352 25.7372 32.9411C23.0688 34.5422 19.447 35.5 15.5 35.5C11.553 35.5 7.93117 34.5422 5.26279 32.9411C2.61431 31.352 0.75 29.0174 0.75 26.25V9.75014Z"
                fill="#86868B"
              />
            </svg>
            <svg
            className={styles.svg__position}
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.70618 18.2945C7.23404 18.1321 7.79363 18.4283 7.95604 18.9562L9.92758 25.3637C10.3171 26.6298 11.3083 27.6209 12.5744 28.0104L25.8681 32.1008C26.9159 32.4232 28.0501 32.3015 29.0055 31.764L38.135 26.6287C38.6164 26.3579 39.2261 26.5286 39.4968 27.01C39.7676 27.4914 39.5969 28.1011 39.1155 28.3718L29.986 33.5072C28.5529 34.3133 26.8516 34.496 25.28 34.0124L11.9862 29.922C10.087 29.3377 8.60038 27.851 8.01602 25.9518L6.04449 19.5444C5.88207 19.0165 6.17832 18.4569 6.70618 18.2945Z"
                fill="#86868B"
              />
              <path
                className={styles.svg__hover}
                d="M40.6272 29.6697C38.1596 26.8446 28.0583 23.7 19.9055 22.0694C9.59303 20.0069 -0.719467 22.0694 4.09303 14.5069C8.7189 7.23768 36.5958 5.42873 42.0206 28.1672C42.4627 30.0201 41.1617 30.2816 40.6272 29.6697Z"
                fill="#9E9E9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4622 9.38268C22.5961 9.91847 22.2704 10.4614 21.7346 10.5954C20.2854 10.9577 18.8733 12.015 17.613 13.582C16.3604 15.1394 15.3195 17.126 14.5965 19.1935C13.8729 21.2629 13.486 23.3614 13.5004 25.1288C13.5151 26.9389 13.9455 28.1972 14.619 28.8384C15.0191 29.2192 15.0346 29.8522 14.6538 30.2522C14.273 30.6522 13.6401 30.6678 13.2401 30.287C11.9778 29.0854 11.5167 27.1473 11.5005 25.1451C11.4838 23.1002 11.9264 20.7705 12.7086 18.5334C13.4914 16.2946 14.6327 14.0964 16.0546 12.3285C17.4688 10.5702 19.2236 9.16162 21.2495 8.6551C21.7853 8.52114 22.3282 8.84689 22.4622 9.38268ZM30.7279 12.1971C30.8261 12.7406 30.4652 13.2608 29.9217 13.3591C28.8157 13.559 27.539 14.2897 26.2672 15.4947C25.0084 16.6874 23.822 18.2822 22.8892 20.0805C21.0031 23.7166 20.2675 27.9427 21.7205 31.2197C21.9444 31.7245 21.7166 32.3153 21.2117 32.5392C20.7068 32.763 20.1161 32.5352 19.8922 32.0303C18.0923 27.9709 19.0871 23.067 21.1138 19.1596C22.1374 17.1862 23.453 15.4059 24.8917 14.0428C26.3174 12.6919 27.9337 11.686 29.566 11.3909C30.1095 11.2927 30.6297 11.6537 30.7279 12.1971Z"
                fill="#86868B"
              />
            </svg>
        
            <p className={styles.menu__txt}>Сеты</p>
          </NavLink>
          <NavLink to="/snacks" className={styles.menu__box}>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28" fill="none">
            <path className={styles.svg__hover} d="M17 7.8125C17 5.15463 14.8454 3 12.1875 3C9.52963 3 7.375 5.15463 7.375 7.8125" fill="#9E9E9E"/>
            <path className={styles.svg__hover} d="M37.625 7.8125C37.625 5.15463 35.4704 3 32.8125 3C30.1546 3 28 5.15463 28 7.8125" fill="#9E9E9E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2617 8.55947C13.9011 4.07359 17.7563 0.625 22.4188 0.625C26.978 0.625 30.765 3.92252 31.5285 8.26255L29.5588 8.60908C28.9606 5.20866 25.9904 2.625 22.4188 2.625C18.7659 2.625 15.7426 5.32738 15.2417 8.84166L13.2617 8.55947Z" fill="#86868B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0469 8.34828C34.1168 7.80546 35.327 7.5 36.6055 7.5C40.9548 7.5 44.4805 11.0258 44.4805 15.375C44.4805 17.1284 43.9063 18.7505 42.936 20.0598L41.3292 18.869C42.0529 17.8925 42.4805 16.6851 42.4805 15.375C42.4805 12.1303 39.8502 9.5 36.6055 9.5C35.6486 9.5 34.7477 9.72805 33.9517 10.1319L33.0469 8.34828Z" fill="#86868B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.875 15.375C0.875 11.0258 4.40076 7.5 8.75 7.5C10.1594 7.5 11.4851 7.87113 12.6316 8.52171L11.6446 10.2612C10.7911 9.77687 9.80439 9.5 8.75 9.5C5.50533 9.5 2.875 12.1303 2.875 15.375C2.875 16.7224 3.32738 17.9613 4.08909 18.9521L2.50352 20.1711C1.48251 18.8431 0.875 17.1786 0.875 15.375Z" fill="#86868B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.875 26.1844C0.875 15.1059 9.8559 6.125 20.9344 6.125H24.0656C35.1441 6.125 44.125 15.1059 44.125 26.1844C44.125 26.842 43.592 27.375 42.9344 27.375H2.06559C1.40804 27.375 0.875 26.8419 0.875 26.1844ZM2.89281 25.375H42.1072C41.6838 15.7767 33.7683 8.125 24.0656 8.125H20.9344C11.2317 8.125 3.31616 15.7767 2.89281 25.375Z" fill="#86868B"/>
            <path className={styles.svg__hover} d="M19.75 14C19.75 14.7594 19.1344 15.375 18.375 15.375C17.6156 15.375 17 14.7594 17 14C17 13.2406 17.6156 12.625 18.375 12.625C19.1344 12.625 19.75 13.2406 19.75 14Z" fill="#9E9E9E"/>
            <path className={styles.svg__hover} d="M25.25 19.5C25.25 20.2594 24.6344 20.875 23.875 20.875C23.1156 20.875 22.5 20.2594 22.5 19.5C22.5 18.7406 23.1156 18.125 23.875 18.125C24.6344 18.125 25.25 18.7406 25.25 19.5Z" fill="#9E9E9E"/>
            <path className={styles.svg__hover} d="M34.875 18.125C34.875 18.8844 34.2594 19.5 33.5 19.5C32.7406 19.5 32.125 18.8844 32.125 18.125C32.125 17.3656 32.7406 16.75 33.5 16.75C34.2594 16.75 34.875 17.3656 34.875 18.125Z" fill="#9E9E9E"/>
            <path className={styles.svg__hover} d="M11.5 20.875C11.5 21.6344 10.8844 22.25 10.125 22.25C9.36561 22.25 8.75 21.6344 8.75 20.875C8.75 20.1156 9.36561 19.5 10.125 19.5C10.8844 19.5 11.5 20.1156 11.5 20.875Z" fill="#9E9E9E"/>
            </svg>
            <p className={styles.menu__txt}>Боулы</p>
          </NavLink>
          <NavLink to="/beverages" className={styles.menu__box}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1299 14.4581C12.3196 14.2461 12.5906 14.125 12.875 14.125H32.125C32.4094 14.125 32.6804 14.2461 32.8701 14.4581C33.0598 14.67 33.1503 14.9527 33.1189 15.2354L30.3689 39.9854C30.3126 40.4919 29.8846 40.875 29.375 40.875H15.625C15.1155 40.875 14.6874 40.4919 14.6311 39.9854L11.8811 15.2354C11.8497 14.9527 11.9402 14.67 12.1299 14.4581ZM13.9923 16.125L16.52 38.875H28.48L31.0077 16.125H13.9923Z" fill="#86868B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 8.25C9.125 7.69772 9.57272 7.25 10.125 7.25H34.875C35.4273 7.25 35.875 7.69772 35.875 8.25V15.125C35.875 15.6773 35.4273 16.125 34.875 16.125H10.125C9.57272 16.125 9.125 15.6773 9.125 15.125V8.25ZM11.125 9.25V14.125H33.875V9.25H11.125Z" fill="#86868B"/>
            <path className={styles.svg__hover} d="M30.75 26.125C30.75 30.6813 27.0563 34.375 22.5 34.375C17.9437 34.375 14.25 30.6813 14.25 26.125C14.25 21.5687 17.9437 17.875 22.5 17.875C27.0563 17.875 30.75 21.5687 30.75 26.125Z" fill="#9E9E9E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9051 1.1327C12.039 0.596906 12.582 0.271145 13.1178 0.405094L18.6178 1.78009C18.901 1.8509 19.1391 2.04192 19.2697 2.30302L22.0197 7.80302C22.2667 8.297 22.0664 8.89767 21.5724 9.14466C21.0785 9.39165 20.4778 9.19143 20.2308 8.69745L17.6865 3.60883L12.6327 2.34538C12.0969 2.21143 11.7711 1.6685 11.9051 1.1327Z" fill="#86868B"/>
            </svg>
            <p className={styles.menu__txt}>Напитки</p>
          </NavLink>
          <NavLink to="/souses" className={styles.menu__box}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="41" viewBox="0 0 33 41" fill="none">
            <path className={styles.svg__hover} d="M12.4007 6.95703V8.69143C12.4007 9.22509 10.9553 10.2035 8.55384 10.2035C6.15236 10.2035 4.70703 9.22509 4.70703 8.69143V6.95703C5.72988 7.46846 7.0418 7.77976 8.55384 7.77976C10.0659 7.802 11.4 7.49069 12.4007 6.95703Z" fill="#9E9E9E"/>
            <path d="M17.1321 11.1807H15.1309V18.5852H17.1321V11.1807Z" fill="#86868B"/>
            <path d="M8.57329 36.0385C3.77034 36.0385 -0.00976562 33.8593 -0.00976562 31.1021V11.1787H1.99147V31.1021C1.99147 32.4807 4.79319 34.0372 8.57329 34.0372V36.0385Z" fill="#86868B"/>
            <path d="M8.57329 16.1172C3.7481 16.1172 -0.00976562 13.9604 -0.00976562 11.1809C-0.00976562 9.60212 1.21321 8.15679 3.32562 7.24512L4.12611 9.0907C2.79196 9.66883 1.99147 10.4471 1.99147 11.2031C1.99147 12.5817 4.79319 14.1382 8.57329 14.1382C12.3534 14.1382 15.1551 12.5817 15.1551 11.2031C15.1551 10.4693 14.3546 9.66883 13.0205 9.0907L13.821 7.24512C15.9334 8.15679 17.1564 9.60212 17.1564 11.1809C17.1341 13.9604 13.3763 16.1172 8.57329 16.1172Z" fill="#86868B"/>
            <path d="M14.4004 4.28613V8.71108C14.4004 8.88897 14.3782 9.06685 14.3337 9.24474C13.9335 10.9791 11.5765 12.2021 8.57461 12.2021C5.79512 12.2021 3.59376 11.157 2.92669 9.64499C2.79327 9.33368 2.72656 9.02238 2.72656 8.68884V4.28613H4.72779V8.71108C4.72779 9.24474 6.19536 10.2231 8.57461 10.2231C10.9538 10.2231 12.4214 9.24474 12.4214 8.71108V4.28613H14.4004Z" fill="#86868B"/>
            <path className={styles.svg__hover} d="M13.8878 2.79788C12.9984 1.57491 10.9971 0.774414 8.55117 0.774414C6.43876 0.774414 4.65989 1.37478 3.63703 2.33093C3.03666 2.88683 2.70312 3.5539 2.70312 4.28769C2.70312 5.39948 3.45915 6.33339 4.70436 6.97823C5.72721 7.48966 7.03913 7.80096 8.55117 7.80096C10.041 7.80096 11.3751 7.48966 12.398 6.97823C13.6432 6.35563 14.3992 5.39948 14.3992 4.28769C14.3992 3.73179 14.2213 3.2426 13.8878 2.79788ZM8.5734 5.79973C6.19416 5.79973 4.72659 4.82135 4.72659 4.28769C4.72659 3.75403 6.19416 2.77565 8.5734 2.77565C10.9526 2.77565 12.4202 3.75403 12.4202 4.28769C12.398 4.82135 10.9526 5.79973 8.5734 5.79973Z" fill="#86868B"/>
            <path  d="M12.4007 4.28841C12.4007 4.82207 10.9553 5.80045 8.55384 5.80045C6.15236 5.80045 4.70703 4.82207 4.70703 4.28841C4.70703 3.75475 6.1746 2.77637 8.55384 2.77637C10.9331 2.77637 12.4007 3.75475 12.4007 4.28841Z" fill="#9E9E9E"/>
            <path  d="M18.203 17.5859C10.4649 17.5859 4.39453 20.9436 4.39453 25.2351C4.39453 29.5266 10.4649 32.8842 18.203 32.8842C25.9411 32.8842 32.0115 29.5266 32.0115 25.2351C32.0115 20.9436 25.9634 17.5859 18.203 17.5859ZM28.7873 27.7033C26.8306 29.5711 22.7836 30.883 18.203 30.883C13.6224 30.883 9.5755 29.5711 7.61874 27.681C6.84048 26.9473 6.39576 26.1023 6.39576 25.2351C6.39576 22.1888 11.7991 19.5872 18.203 19.5872C24.5847 19.5872 30.0103 22.1665 30.0103 25.2351C30.0103 26.1023 29.5656 26.9473 28.7873 27.7033Z" fill="#86868B"/>
            <path d="M18.1984 41.0002C12.6171 41.0002 8.8148 38.9323 7.72524 35.3523L5.56836 28.2813L7.48065 27.7031L9.63753 34.7741C10.438 37.4647 13.5511 38.999 18.1761 38.999V41.0002H18.1984Z" fill="#86868B"/>
            <path  d="M18.2051 41V38.9987C22.8301 38.9987 25.9432 37.4645 26.7437 34.7739L28.9005 27.6807L30.8128 28.2588L28.656 35.3298C27.5886 38.932 23.7863 41 18.2051 41Z" fill="#86868B"/>
            <path className={styles.svg__hover} d="M28.7877 27.7028C26.831 29.5706 22.784 30.8825 18.2034 30.8825C13.6228 30.8825 9.5759 29.5706 7.61914 27.6806C9.04224 25.7905 13.0002 24.1006 18.2034 24.1006C23.4289 24.1228 27.3869 25.7905 28.7877 27.7028Z" fill="#9E9E9E"/>
            </svg>
            <p className={styles.menu__txt}>Соусы</p>
          </NavLink>
          <div  className={styles.menu__box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.5 41.8C33.4352 41.8 42.3 32.9352 42.3 22C42.3 11.0648 33.4352 2.2 22.5 2.2C11.5648 2.2 2.7 11.0648 2.7 22C2.7 32.9352 11.5648 41.8 22.5 41.8ZM22.5 44C34.6503 44 44.5 34.1503 44.5 22C44.5 9.84974 34.6503 0 22.5 0C10.3497 0 0.5 9.84974 0.5 22C0.5 34.1503 10.3497 44 22.5 44Z"
                fill="#D2D2D7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4992 34.1002C29.1819 34.1002 34.5992 28.6828 34.5992 22.0002C34.5992 15.3175 29.1819 9.9002 22.4992 9.9002C15.8166 9.9002 10.3992 15.3175 10.3992 22.0002C10.3992 28.6828 15.8166 34.1002 22.4992 34.1002ZM22.4992 36.3002C30.3969 36.3002 36.7992 29.8979 36.7992 22.0002C36.7992 14.1025 30.3969 7.7002 22.4992 7.7002C14.6015 7.7002 8.19922 14.1025 8.19922 22.0002C8.19922 29.8979 14.6015 36.3002 22.4992 36.3002Z"
                fill="#D2D2D7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.5008 27.4998C25.5383 27.4998 28.0008 25.0374 28.0008 21.9998C28.0008 18.9622 25.5383 16.4998 22.5008 16.4998C19.4632 16.4998 17.0008 18.9622 17.0008 21.9998C17.0008 25.0374 19.4632 27.4998 22.5008 27.4998ZM22.5008 29.6998C26.7534 29.6998 30.2008 26.2524 30.2008 21.9998C30.2008 17.7472 26.7534 14.2998 22.5008 14.2998C18.2482 14.2998 14.8008 17.7472 14.8008 21.9998C14.8008 26.2524 18.2482 29.6998 22.5008 29.6998Z"
                fill="#D2D2D7"
              />
            </svg>
            <p className={styles.menu__txt}>Неизв...</p>
          </div>
          <div className={styles.menu__box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.5 41.8C33.4352 41.8 42.3 32.9352 42.3 22C42.3 11.0648 33.4352 2.2 22.5 2.2C11.5648 2.2 2.7 11.0648 2.7 22C2.7 32.9352 11.5648 41.8 22.5 41.8ZM22.5 44C34.6503 44 44.5 34.1503 44.5 22C44.5 9.84974 34.6503 0 22.5 0C10.3497 0 0.5 9.84974 0.5 22C0.5 34.1503 10.3497 44 22.5 44Z"
                fill="#D2D2D7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4992 34.1002C29.1819 34.1002 34.5992 28.6828 34.5992 22.0002C34.5992 15.3175 29.1819 9.9002 22.4992 9.9002C15.8166 9.9002 10.3992 15.3175 10.3992 22.0002C10.3992 28.6828 15.8166 34.1002 22.4992 34.1002ZM22.4992 36.3002C30.3969 36.3002 36.7992 29.8979 36.7992 22.0002C36.7992 14.1025 30.3969 7.7002 22.4992 7.7002C14.6015 7.7002 8.19922 14.1025 8.19922 22.0002C8.19922 29.8979 14.6015 36.3002 22.4992 36.3002Z"
                fill="#D2D2D7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.5008 27.4998C25.5383 27.4998 28.0008 25.0374 28.0008 21.9998C28.0008 18.9622 25.5383 16.4998 22.5008 16.4998C19.4632 16.4998 17.0008 18.9622 17.0008 21.9998C17.0008 25.0374 19.4632 27.4998 22.5008 27.4998ZM22.5008 29.6998C26.7534 29.6998 30.2008 26.2524 30.2008 21.9998C30.2008 17.7472 26.7534 14.2998 22.5008 14.2998C18.2482 14.2998 14.8008 17.7472 14.8008 21.9998C14.8008 26.2524 18.2482 29.6998 22.5008 29.6998Z"
                fill="#D2D2D7"
              />
            </svg>
            <p className={styles.menu__txt}>Неизв...</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Menu;
