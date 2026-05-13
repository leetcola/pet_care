"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "服务项目" },
  { href: "#process", label: "洗护流程" },
  { href: "#plans", label: "会员套餐" },
  { href: "#reviews", label: "客户评价" },
  { href: "#booking", label: "预约到店" },
];

const slides = [
  "/assets/carousel-reception.png",
  "/assets/carousel-wash.png",
  "/assets/carousel-grooming.png",
];

const slideLabels = ["门店接待区", "洗护空间", "美容护理区"];

const services = [
  {
    tag: "日常推荐",
    title: "基础香波洗护",
    copy: "适合定期清洁，包含沐浴、吹干、梳毛、耳眼清洁与足底修剪。",
    price: "88",
  },
  {
    tag: "精致造型",
    title: "全身美容修剪",
    copy: "按品种与毛量定制造型，适合贵宾、比熊、博美等需要定期打理的宠物。",
    price: "198",
  },
  {
    tag: "敏感友好",
    title: "皮毛舒缓护理",
    copy: "针对干燥、打结、换毛期和敏感皮肤，使用低刺激护理产品。",
    price: "128",
  },
  {
    tag: "猫咪专区",
    title: "猫咪减压洗护",
    copy: "低噪吹风、分段安抚、独立猫咪时段，减少陌生环境带来的紧张。",
    price: "158",
  },
];

const steps = [
  {
    title: "入店沟通",
    copy: "确认宠物性格、皮肤状态、既往护理习惯和本次服务重点。",
  },
  {
    title: "梳理开结",
    copy: "先梳通浮毛和轻度打结，降低沐浴时拉扯造成的不适。",
  },
  {
    title: "温和清洁",
    copy: "按毛发和皮肤情况选择香波，控制水温与冲洗时间。",
  },
  {
    title: "吹干护理",
    copy: "彻底吹干底毛，完成耳眼、足底、指甲等基础护理。",
  },
];

const plans = [
  {
    tag: "热门",
    title: "月度清爽卡",
    copy: "每月 2 次基础洗护，适合城市日常出门频繁的小中型犬。",
    price: "299",
    suffix: "/月",
    featured: true,
    items: ["含耳眼清洁与足底修剪", "赠送一次毛结评估", "会员专属预约时段"],
  },
  {
    tag: "猫咪",
    title: "猫咪安心卡",
    copy: "独立安静时段，适合胆小或第一次到店的猫咪。",
    price: "399",
    suffix: "/2次",
    items: ["低噪吹风设备", "一对一护理记录", "免费基础指甲修剪"],
  },
  {
    tag: "造型",
    title: "精修造型卡",
    copy: "适合需要稳定保持造型的长毛犬和卷毛犬。",
    price: "699",
    suffix: "/3次",
    items: ["含造型咨询", "局部修剪不限次调整", "护理产品 9 折"],
  },
];

const testimonials = [
  {
    name: "林女士",
    pet: "比熊 豆包",
    rating: "5.0",
    copy: "第一次来就很安心，美容师会先问豆包有没有皮肤敏感和打结位置。剪完造型很清爽，耳朵和脚底也处理得很干净。",
  },
  {
    name: "周先生",
    pet: "英短 蓝蓝",
    rating: "5.0",
    copy: "我家猫平时特别怕吹风，这里安排了安静时段，过程比想象中顺利。洗完毛很蓬，回家也没有应激。",
  },
  {
    name: "陈女士",
    pet: "柯基 奶盖",
    rating: "4.9",
    copy: "服务节奏很稳，不会一味赶时间。洗护前后都会拍照说明，哪些地方掉毛多、哪里需要观察都讲得清楚。",
  },
  {
    name: "王先生",
    pet: "金毛 Max",
    rating: "5.0",
    copy: "大型犬洗护很考验耐心，店员全程两个人配合，吹干特别仔细。Max 回来身上香味很自然，不刺鼻。",
  },
  {
    name: "赵女士",
    pet: "泰迪 糖糖",
    rating: "4.9",
    copy: "连续办了月卡，最大的感受是稳定。每次造型都能保持同一个风格，预约时间也比较准，不用等太久。",
  },
  {
    name: "许女士",
    pet: "布偶 小雪",
    rating: "5.0",
    copy: "长毛猫打结处理得很温柔，没有硬扯。护理建议也很实用，教了我回家怎么梳毛和减少毛结。",
  },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between gap-5 border-b border-line/80 bg-cream/90 px-[clamp(18px,5vw,64px)] py-4 backdrop-blur-2xl max-sm:px-4 max-sm:py-3">
      <a
        className="flex min-w-40 items-center gap-2.5 font-extrabold tracking-normal"
        href="#top"
        aria-label="泡泡尾巴宠物洗护店首页"
      >
        <span className="grid size-[34px] place-items-center rounded-full bg-mint-strong text-lg font-black text-white">
          P
        </span>
        <span>泡泡尾巴</span>
      </a>
      <nav
        className="flex items-center justify-center gap-[clamp(14px,3vw,34px)] whitespace-nowrap text-[15px] text-muted max-[980px]:hidden"
        aria-label="主导航"
      >
        {navItems.map((item) => (
          <a key={item.href} className="hover:text-ink" href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a
        className="whitespace-nowrap rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white max-sm:px-3 max-sm:py-2 max-sm:text-[13px]"
        href="tel:4006688120"
      >
        400-6688-120
      </a>
    </header>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative grid min-h-[92vh] items-center overflow-hidden bg-cream px-[clamp(22px,6vw,84px)] pb-[84px] pt-[100px] before:absolute before:inset-0 before:z-[1] before:bg-[linear-gradient(90deg,rgba(255,250,241,0.95)_0%,rgba(255,250,241,0.82)_34%,rgba(255,250,241,0.18)_64%)] after:absolute after:inset-x-0 after:bottom-0 after:z-[2] after:h-[110px] after:bg-[linear-gradient(180deg,rgba(255,250,241,0),#fffaf1)] max-[980px]:min-h-[86vh] max-[980px]:before:bg-[linear-gradient(180deg,rgba(255,250,241,0.95)_0%,rgba(255,250,241,0.82)_44%,rgba(255,250,241,0.22)_100%)] max-sm:min-h-[92vh] max-sm:px-[18px] max-sm:pb-[62px] max-sm:pt-[92px]"
      aria-label="宠物洗护店主视觉"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`hero-slide transition duration-700 ease-out max-[980px]:bg-bottom ${
              activeSlide === index ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
      </div>
      <div className="relative z-[3] max-w-[620px] pt-[18px] max-sm:max-w-full">
        <span className="mb-[18px] inline-flex items-center gap-2 text-sm font-extrabold text-[#2f6d5b] before:h-0.5 before:w-8 before:bg-mint-strong before:content-['']">
          一宠一巾一消毒
        </span>
        <h1 className="m-0 max-w-[10em] text-[clamp(42px,7vw,82px)] leading-[1.04] tracking-normal">
          给毛孩子一次舒服又干净的洗护
        </h1>
        <p className="m-0 mt-6 max-w-[520px] text-[clamp(17px,2vw,21px)] text-[#46534f] max-sm:text-base">
          泡泡尾巴专注犬猫洗澡、美容、护理与基础健康观察。温和产品、透明流程、预约制服务，让每一次到店都更安心。
        </p>
        <div className="mt-[34px] flex flex-wrap gap-3.5">
          <a className="button-base bg-coral text-white shadow-coral" href="#booking">
            立即预约
          </a>
          <a
            className="button-base border-ink/15 bg-white/70 text-ink"
            href="#services"
          >
            查看价目
          </a>
        </div>
        <div
          className="mt-[46px] grid max-w-[560px] grid-cols-3 gap-3 max-sm:grid-cols-1"
          aria-label="门店优势"
        >
          {[
            ["45分钟", "小型犬基础快洗"],
            ["6步", "标准洗护流程"],
            ["1对1", "美容师全程服务"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-lg border border-mint-strong/30 bg-white/70 p-4 backdrop-blur"
            >
              <strong className="block text-[22px] leading-[1.1]">{value}</strong>
              <span className="text-[13px] text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute bottom-8 right-[clamp(22px,6vw,84px)] z-[4] flex items-center gap-2 rounded-full border border-white/60 bg-white/65 p-1.5 shadow-soft backdrop-blur max-sm:bottom-5 max-sm:right-[18px]"
        aria-label="切换主视觉图片"
      >
        {slides.map((slide, index) => (
          <button
            key={slide}
            className={`size-9 rounded-full text-sm font-black transition ${
              activeSlide === index
                ? "bg-ink text-white shadow-[0_10px_24px_rgba(31,45,43,0.2)]"
                : "bg-white/80 text-ink hover:bg-mint"
            }`}
            type="button"
            aria-label={`切换到${slideLabels[index]}`}
            aria-pressed={activeSlide === index}
            onClick={() => setActiveSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell">
      <SectionHead
        title="按需求选择洗护"
        copy="从日常清洁到精修造型，所有项目均包含入店检查、用品消毒、吹干梳理和基础护理建议。"
      />
      <div className="mx-auto grid max-w-[1180px] grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service) => (
          <article key={service.title} className="card-surface min-h-[260px] p-6 max-sm:p-[22px]">
            <span className="pill-tag">{service.tag}</span>
            <h3 className="mb-2.5 mt-5 text-[22px] leading-[1.2]">{service.title}</h3>
            <p className="m-0 text-[15px] text-muted">{service.copy}</p>
            <Price value={service.price} suffix="起" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section-shell bg-[#edf8f0]">
      <SectionHead
        title="每一步都看得见"
        copy="预约制控制到店密度，减少等待和交叉接触。洗护前后会记录宠物皮毛状态，方便主人持续观察。"
      />
      <div className="mx-auto grid max-w-[1180px] grid-cols-4 gap-px overflow-hidden rounded-lg border border-line bg-line max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        {steps.map((step, index) => (
          <article key={step.title} className="min-h-[230px] bg-white p-7 max-sm:p-[22px]">
            <div className="text-4xl font-black leading-none text-mint-strong">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-2.5 mt-6 text-[22px]">{step.title}</h3>
            <p className="m-0 text-muted">{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MembershipPlans() {
  return (
    <section id="plans" className="section-shell">
      <SectionHead
        title="会员更适合长期护理"
        copy="适合需要固定洗护频率的家庭。套餐可按宠物体型调整，未使用次数可顺延。"
      />
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.1fr_0.9fr_0.9fr] gap-[18px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`card-surface relative overflow-hidden p-7 max-sm:p-[22px] ${
              plan.featured ? "bg-ink text-white max-[980px]:col-span-full max-sm:col-span-1" : ""
            }`}
          >
            <span className="pill-tag">{plan.tag}</span>
            <h3 className="mb-2.5 mt-5 text-[22px] leading-[1.2]">{plan.title}</h3>
            <p className={`m-0 text-[15px] ${plan.featured ? "text-white/75" : "text-muted"}`}>
              {plan.copy}
            </p>
            <Price value={plan.price} suffix={plan.suffix} />
            <ul className="mt-7 grid list-none gap-3 p-0">
              {plan.items.map((item) => (
                <li
                  key={item}
                  className={`before:mr-2 before:font-black before:text-mint-strong before:content-['✓'] ${
                    plan.featured ? "text-white/75" : "text-muted"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="section-shell bg-[#f7fbf7]">
      <SectionHead
        title="客户评价"
        copy="来自附近宠物家庭的真实反馈。我们更在意每一次洗护后的状态、细节和主人能不能放心。"
      />
      <div className="mx-auto grid max-w-[1180px] grid-cols-3 gap-[18px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        {testimonials.map((item) => (
          <article key={`${item.name}-${item.pet}`} className="card-surface grid min-h-[250px] gap-5 p-6 max-sm:p-[22px]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="m-0 text-[20px] leading-[1.2]">{item.name}</h3>
                <p className="m-0 mt-1 text-sm font-bold text-mint-strong">{item.pet}</p>
              </div>
              <span className="rounded-full bg-[#fff4ed] px-3 py-1 text-sm font-black text-coral">
                {item.rating}
              </span>
            </div>
            <p className="m-0 text-[15px] leading-7 text-muted">“{item.copy}”</p>
            <div className="mt-auto flex gap-1 text-lg text-coral" aria-label={`${item.rating} 分评价`}>
              {"★★★★★"}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Booking() {
  const tomorrowMorning = new Date(Date.now() + 24 * 60 * 60 * 1000);
  tomorrowMorning.setHours(9, 30, 0, 0);
  const defaultArrivalTime = `${tomorrowMorning.getFullYear()}-${String(tomorrowMorning.getMonth() + 1).padStart(2, "0")}-${String(tomorrowMorning.getDate()).padStart(2, "0")}T09:30`;

  return (
    <section id="booking" className="section-shell bg-[#fff4ed]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[0.82fr_1.18fr] items-start gap-7 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        <aside className="card-surface p-[30px] shadow-none max-sm:p-[22px]">
          <h2 className="mb-4 mt-0 text-[clamp(30px,4vw,46px)] leading-[1.1]">
            预约到店
          </h2>
          <p className="mb-6 mt-0 text-muted">
            留下宠物信息和期望时间，门店会在 30 分钟内确认档期。急单建议直接拨打门店电话。
          </p>
          <div className="grid gap-3 border-t border-line pt-[22px]">
            {[
              ["营业时间", "10:00 - 21:00"],
              ["门店地址", "城市花园 2 号楼 108"],
              ["预约电话", "400-6688-120"],
              ["电子邮箱", "hello@petcare.com"],
              ["邮编", "200120"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-5 text-muted">
                <strong className="text-ink">{label}</strong>
                <span className="break-all text-right">{value}</span>
              </div>
            ))}
          </div>
        </aside>
        <div className="card-surface p-7 shadow-none max-sm:p-[22px]">
          <form className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <FormField label="主人姓名">
              <input className="form-control" type="text" name="name" placeholder="例如：林女士" />
            </FormField>
            <FormField label="联系电话">
              <input className="form-control" type="tel" name="phone" placeholder="请输入手机号" />
            </FormField>
            <FormField label="宠物类型">
              <select className="form-control" name="pet" defaultValue="小型犬">
                <option>小型犬</option>
                <option>中大型犬</option>
                <option>猫咪</option>
                <option>其他</option>
              </select>
            </FormField>
            <FormField label="服务项目">
              <select className="form-control" name="service" defaultValue="基础香波洗护">
                <option>基础香波洗护</option>
                <option>全身美容修剪</option>
                <option>皮毛舒缓护理</option>
                <option>猫咪减压洗护</option>
              </select>
            </FormField>
            <FormField label="期望到店时间" wide>
              <input className="form-control" type="datetime-local" name="arrivalTime" defaultValue={defaultArrivalTime} />
            </FormField>
            <FormField label="备注" wide>
              <textarea
                className="form-control min-h-28 resize-y"
                name="message"
                placeholder="可填写宠物年龄、体重、性格、皮肤情况或期望到店时间"
              />
            </FormField>
            <button className="button-base col-span-full bg-coral text-white shadow-coral" type="button">
              提交预约信息
            </button>
            <p className="col-span-full m-0 text-[13px] text-muted">
              当前为静态演示页面，表单按钮不会真正发送数据。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

function Price({ value, suffix }: { value: string; suffix: string }) {
  return (
    <div className="mt-[26px] flex items-baseline gap-1.5 font-black text-coral">
      <span>¥</span>
      <b className="text-[34px]">{value}</b>
      <span>{suffix}</span>
    </div>
  );
}

function FormField({
  label,
  wide,
  children,
}: {
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`grid gap-2 text-sm font-extrabold text-ink ${wide ? "col-span-full" : ""}`}>
      {label}
      {children}
    </label>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Testimonials />
        <Process />
        <MembershipPlans />
        <Booking />
      </main>
      <footer className="flex justify-between gap-5 bg-ink px-[clamp(22px,6vw,84px)] py-7 text-sm text-white/70 max-sm:grid max-sm:px-[18px] max-sm:py-6">
        <strong className="text-white">泡泡尾巴宠物洗护店</strong>
        <span>干净、温柔、可追踪的犬猫洗护体验</span>
      </footer>
    </>
  );
}
