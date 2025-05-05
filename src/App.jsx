import './App.css';
import LogoShape from './component/LogoShape';

import logo_openroad from './img/logo_openroad.png'
import logo_serenest from './img/logo_serenest.png'
import logo_retrosol from './img/logo_retrosol.png'

import bg_index from './img/bg_index.jpg'
import bg_color_red from './img/bg_color_red.png'
import bg_color_blue from './img/bg_color_blue.png'
import bg_color_green from './img/bg_color_green.png'

const App = () => {
  return (

    <div className="flex h-screen bg-white font-[Inter]">

      <div className="w-5/7 p-6">
        <div style={{ backgroundImage: `url(${bg_index})` }} className="relative bg-cover bg-center h-full w-full rounded-[30px]">
          <LogoShape />
          <div className="absolute top-0 right-0 m-3">
            <ul className="menu menu-horizontal bg-base-200 rounded-3xl space-x-0.5 font-bold">
              <li><a className='rounded-2xl'>关于</a></li>
              <li><a className='rounded-2xl'>产品</a></li>
              <li><a className='rounded-2xl'>动态</a></li>
              <li><a className='rounded-2xl'>责任</a></li>
              <li><a className='rounded-2xl'>招新</a></li>
            </ul>
          </div>
          <div className='absolute bottom-0 m-3 space-y-2'>
            <h1 className='p-4 bg-white rounded-4xl text-2xl w-70 font-bold text-center'>
              漫游世界，无限可能。
            </h1>
            <h1 className='p-6 bg-white rounded-4xl text-6xl font-bold text-left'>
              ROAMING the WORLD<br />ENDLESS POSSIBILITIES
            </h1>
          </div>
        </div>
      </div>

      <div className="w-2/7 p-8 relative overflow-hidden">
        <div className='absolute flex space-x-1 top-0 right-0 p-3 mt-3 items-end'>
          <ul className="menu menu-horizontal bg-base-200 rounded-3xl space-x-0.5 font-bold">
            <li onClick={() => { window.alert("暂未开放") }}><a className='rounded-2xl'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V44C28.9886 44 33.5507 42.1735 37.0539 39.1529" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="#333" stroke="#333" stroke-width="4" stroke-linejoin="round" /><path d="M32 24C32 27.3137 34.6863 30 38 30V30C41.3137 30 44 27.3137 44 24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M32 25V16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </a></li>
            <li onClick={() => { window.alert("暂未开放") }}><a className='rounded-2xl'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z" fill="#333" stroke="#333" stroke-width="4" stroke-linejoin="round" /></svg>
            </a></li>
            <li onClick={() => { window.alert("暂未开放") }}><a className='rounded-2xl'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#333" /><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z" fill="#333" /></svg>
            </a></li>
            <li onClick={() => { window.open("https://v.douyin.com/1qNdel7ytdI/") }}><a className='rounded-2xl'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.358 19.1399C15.4694 18.8558 11.3762 20.9553 9.07838 25.4384C5.63169 32.163 8.48026 43.1666 19.9788 43.1666C31.4774 43.1666 31.81 32.0554 31.81 30.8914C31.81 30.1154 31.81 25.7764 31.81 17.8746C34.2694 19.4323 36.343 20.37 38.0308 20.6877C39.7186 21.0053 40.7915 21.1461 41.2497 21.11V14.6343C39.6886 14.4461 38.3386 14.0873 37.1997 13.5581C35.4913 12.7643 32.1037 10.5611 32.1037 7.33208C32.106 7.34787 32.106 6.51493 32.1037 4.83325H24.9857C24.9645 20.6493 24.9645 29.3353 24.9857 30.8914C25.0175 33.2255 23.2068 36.4905 19.5355 36.4905C15.8642 36.4905 14.0535 33.2281 14.0535 31.1239C14.0535 29.8357 14.496 27.9685 16.3251 26.5858C17.4098 25.7658 18.9153 25.4384 21.358 25.4384C21.358 24.6828 21.358 22.5833 21.358 19.1399Z" fill="#333" stroke="#333" stroke-width="4" stroke-linejoin="round" /></svg>
            </a></li>
            <li onClick={() => { window.open("https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0MDY1MDUzOQ==") }}><a className='rounded-2xl'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" fill="#333" /><path d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M15.125 20.4667C16.3676 20.4667 17.375 19.4519 17.375 18.2C17.375 16.9482 16.3676 15.9333 15.125 15.9333C13.8824 15.9333 12.875 16.9482 12.875 18.2C12.875 19.4519 13.8824 20.4667 15.125 20.4667Z" fill="#FFF" /><path d="M24.125 20.4667C25.3676 20.4667 26.375 19.4519 26.375 18.2C26.375 16.9482 25.3676 15.9333 24.125 15.9333C22.8824 15.9333 21.875 16.9482 21.875 18.2C21.875 19.4519 22.8824 20.4667 24.125 20.4667Z" fill="#FFF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" fill="#333" /><path d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M42.0024 35.9728L43 42L38.7618 39.9293" fill="#333" /><path d="M42.0024 35.9728L43 42L38.7618 39.9293" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M35.6875 30.7999C34.7555 30.7999 34 30.0388 34 29.0999C34 28.161 34.7555 27.3999 35.6875 27.3999C36.6195 27.3999 37.375 28.161 37.375 29.0999C37.375 30.0388 36.6195 30.7999 35.6875 30.7999Z" fill="#FFF" /><path d="M28.9375 30.7999C28.0055 30.7999 27.25 30.0388 27.25 29.0999C27.25 28.161 28.0055 27.3999 28.9375 27.3999C29.8695 27.3999 30.625 28.161 30.625 29.0999C30.625 30.0388 29.8695 30.7999 28.9375 30.7999Z" fill="#FFF" /></svg>
            </a></li>
            <li onClick={() => { window.open("https://space.bilibili.com/1675662964") }}><a className='rounded-2xl'>
              <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>
            </a></li>
          </ul>
        </div>

        <div className='absolute right-0 p-3 top-20 h-full w-full overflow-scroll space-y-4 pb-20'>

          {/* news */}
          <div className="relative h-75 p-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
            <img src={bg_color_red} alt="" className="absolute w-full h-full inset-0 object-cover blur-xs" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-transparent opacity-50"></div>
            <div className="absolute inset-x-5 text-white">
              <h2 className="text-4xl font-semibold mb-2">最新动态</h2>
              <p className="text-sm font-medium uppercase tracking-wider mb-6">「喜讯」工作室成员在2025中国国际大学生创新大赛广东理工职业学院人工智能学院校级选拔赛中获佳绩</p>
            </div>
            <button
              onClick={() => { window.open("https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0MDY1MDUzOQ==") }}
              className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-white shadow-lg transition duration-200 hover:bg-gray-300">阅读更多</button>
          </div>

          {/* news */}
          <div className="relative h-45 p-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
            <img src={bg_color_blue} alt="" className="absolute w-full h-full inset-0 object-cover blur-xs" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-50"></div>
            <div className="absolute inset-x-5 text-white items-center w-full pr-10">
              <h2 className="text-4xl font-semibold mb-3">产品家族</h2>
              <p className="text-sm font-medium uppercase tracking-wider mb-6">令人赞不绝口的心血之作</p>
              <div className="avatar-group -space-x-6 justify-self-end -mt-5">
                <div className="avatar">
                  <div className="w-12">
                    <img src={logo_openroad} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={logo_serenest} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={logo_retrosol} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* join */}
          <div className="relative h-40 p-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
            <img src={bg_color_green} alt="" className="absolute w-full h-full inset-0 object-cover blur-xs" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-50"></div>
            <div className="absolute inset-x-5 text-white items-center w-full pr-10">
              <h2 className="text-4xl font-semibold mb-6">加入我们</h2>
              <button
                onClick={() => { window.alert("暂未开放") }}
                className="absolute text-black py-3 right-10 rounded-2xl font-semibold bg-white shadow-lg transition duration-200 px-3 hover:bg-gray-300"
              >
                前往招新官网
              </button>
            </div>
          </div>




        </div>
      </div>
    </div >
  );
};

export default App;
