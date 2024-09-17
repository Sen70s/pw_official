import { Link } from "@nextui-org/link";

import { Head } from "./head";
import { Image } from "@nextui-org/image";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow ">
        {children}
      </main>

      <footer className="footer bg-base-200 text-base-content p-16 px-16 w-full ">
        <aside>
          <Image
            height={100}
            radius="none"
            src="/logo.png"
            alt="PointerWander"
          />
          <p>
            Copyright © 2023-2024 Pointer Wander. All Rights Reserved. 指针漫游 版权所有
          </p>
        </aside>
        <nav>
          <h6 className="footer-title"><b>产品</b></h6>
          <a className="link link-hover">App</a>
          <a className="link link-hover">游戏</a>
          <a className="link link-hover">更多</a>
        </nav>
        <nav>
          <h6 className="footer-title"><b>工作室</b></h6>
          <a className="link link-hover">关于我们</a>
          <a className="link link-hover">校园招新</a>
          <a className="link link-hover">岗位详情</a>
          <a className="link link-hover">工作室文化</a>
        </nav>
        <nav>
          <h6 className="footer-title"><b>联系我们</b></h6>
          <a className="link link-hover">邮箱</a>
          <a className="link link-hover">公众号</a>
          <a className="link link-hover">在线客服</a>
        </nav>
      </footer>

      
    </div>
  );
}
