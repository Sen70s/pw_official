import React from "react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const posts = [
    {
      id: 1,
      title: "OpenRoad",
      href: "#",
      description: "A Edu. App.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "APP", href: "#" },
      imageUrl:
        "https://images.ctfassets.net/kftzwdyauwt9/1XeXlBlWdUBSPFcVPsOmOD/dc8123f1031a0f9fe1b816790ee510a9/Structured_Outputs_Cover.png?w=640&q=90&fm=webp",
    }, {
      id: 2,
      title: "Smuggling Archives",
      href: "#",
      description: "A RPG game.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "GAME", href: "#" },
      imageUrl:
        "https://images.ctfassets.net/kftzwdyauwt9/3qxnep8UZm6mNuXeEY6OxW/41a11c729769d54ce18954040b3dfce0/start-building-and-api-call.jpg?w=640&q=90&fm=webp",
    }
  ];

  const links = [
    { name: "校园招新", href: "https://pointerwander.feishu.cn/share/base/form/shrcnhSUU6PLjJ4y9SWr3BcxJCe" }
  ];

  const stats = [
    { name: "技术密集型工作室", value: "技术漫游世界 代码缔造未来" },
    { name: "价值观", value: "好好工作 好好学习 好好玩耍" },
    { name: "成员激励", value: "丰厚成员激励金" }
  ];

  const features = [
    { name: "专利申请", description: "您作为第一权利人或参与人，参与申请专利。" },
    { name: "软件著作权", description: "工作室将您作为参与人申请软件著作权。" },
    { name: "挑战杯", description: "挑战自我，发展自我，成就自我。" },
    { name: "创新创业大赛", description: "致力于培养双创人才。" },
    { name: "计算机设计大赛", description: "专业技能竞赛" },
    { name: "And More", description: "更多机会只看你自己，有能力我们就助推。" },
  ];


  return (
    <DefaultLayout>

      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">

        <div
          className=" animate-pulse 
        inline-block text-center justify-center w-11/12 h-[40rem] align-middle content-center rounded-lg 
        bg-[url('https://images.ctfassets.net/kftzwdyauwt9/3H5j3oawTq7P42sqqfaVFp/6fba4c7e9c4b9e465d7cfb576f609249/oai_o1_preview_bg.png?w=1920&q=90&fm=webp')]
        "
        >
          <h1 className={title()}>Roaming the world , endless possibilities .</h1>

        </div>

        <div className="py-24 sm:py-32 min-w-7xl" >
          <div className="mx-auto max-w-7xl px-6 lg:px-8" id="products">
            <div className="mx-auto max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Products</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                The bridge between you and me.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">

                  {/* 产品图片 */}
                  <img alt="" src={post.imageUrl} className="h-100 rounded-xl bg-gray-50" />

                  <div className="group relative">
                    {/* name */}
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>

                    {/* 发布日期与类型 */}
                    <div className="flex items-center gap-x-4 text-xs mt-2">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>

                    {/* 简介 */}
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>

                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full py-24 sm:py-32 min-w-7xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-7xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work with us</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Create wonders with us.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-7xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-2xl font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className="mt-12 flex justify-between sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 ">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 ">{stat.name}</dt>
                    <dd className="text-xl font-bold leading-9 tracking-tight ">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>


        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Studio Training Range</h2>
              <p className="mt-4 text-gray-500">
                Cultivate, for better development.<br />
                右侧素材均来自OpenAi
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-Blod text-gray-900"><b>{feature.name}</b></dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://images.ctfassets.net/kftzwdyauwt9/7i9gjVSZuEn0yoN8rbG3KR/1dc876729a6b7a4baafbc4a848055e81/guides.gif?w=640&q=90&fm=webp&fit=pad"
                className="rounded-lg bg-gray-100"
              />
              <video muted autoPlay loop className="rounded-lg w-[268] h-[268] object-cover">
                <source src="https://cdn.openai.com/chatgpt/Comp_1_1.mp4" />
              </video>
              <video muted autoPlay loop className="rounded-lg w-[268] h-[268] object-cover">
                <source src="https://cdn.openai.com/sora/videos/paper-airplanes.mp4" />
              </video>
              <video muted autoPlay loop className="rounded-lg w-[268] h-[268] object-cover">
                <source src="https://cdn.openai.com/chatgpt/SORA_casestudy.mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 min-h-[300] rounded-lg">
          <div className="hero-content text-center ">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Join New</h1>
              <p className="py-6">
                I also want to work on Pointer Wander!!!
              </p>
              <button className="btn btn-primary">Send Resume</button>
            </div>
          </div>
        </div>



      </section>
    </DefaultLayout>
  );
}
