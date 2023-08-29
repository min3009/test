"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./nav.module.scss";
import { cx } from "@/libs/utils";
import {
  CHILDREN,
  CLINIC,
  COMMUNITY,
  EFFECT,
  HEAD,
  Items,
  SPECIALTY,
  SPINAL,
  headerLinks,
  navLinks,
} from "@/config/nav.config";

const leftNavLinks: Array<Items> = [HEAD, SPINAL, CHILDREN];
const rightNavLinks: Array<Items> = [SPECIALTY, CLINIC, EFFECT, COMMUNITY];

export default function Nav() {
  const [subMenu, setSubMenu] = useState<Items | null>(null);

  return (
    <>
      <header className={s.header}>
        <Wrapper>
          <div className={s.header_wrap}>
            <div className={s.header_left}>
              <div className={s.header_eye}>
                <Image
                  src="/assets/eye_logo.png"
                  alt="eye"
                  width={35}
                  height={35}
                />
                <span className={s.eye_text}>
                  집중질환
                  <br />
                  한눈에 살펴보기
                </span>
              </div>

              <div className={s.header_section}>
                {headerLinks.map((link) => (
                  <Link
                    href={`/${link.category}/${link.link}`}
                    key={`header-${link.title}`}
                    className={s.t_s_link}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className={s.header_right}>
              <Link href="/" className={s.link}>
                로그인
              </Link>
              <span>|</span>
              <Link href="/" className={s.link}>
                회원가입
              </Link>
            </div>
          </div>
        </Wrapper>
      </header>

      <Wrapper>
        <div className={s.main_logo_wrapper}>
          <Link href="/">
            <Image
              src="/assets/nav_logo.png"
              alt="본수호 한의원"
              width={280}
              height={93}
            />
          </Link>
          <div className={s.m_right}>
            <div className={s.m_text}>
              <span className={s.orange_text}>건강한 일상</span>을 응원합니다.
            </div>
            <Link type="tel" href="tel:0632227579" className={s.phone}>
              063) 222-7579
            </Link>
          </div>
        </div>
      </Wrapper>

      <nav className={s.nav_wrap}>
        <Wrapper>
          <div className={s.b_wrap}>
            <div
              className={cx(s.main_link_wrapper)}
              onMouseLeave={() => setSubMenu(null)}
            >
              {leftNavLinks.map((navLink) => (
                <button
                  key={`nav-${navLinks[navLink].title}`}
                  className={s.main_link_btn}
                  onMouseEnter={() => setSubMenu(navLink)}
                >
                  {navLinks[navLink].title}
                </button>
              ))}

              {subMenu && leftNavLinks.includes(subMenu) ? (
                <div className={cx(s.subMenu_wrapper, s.white_bg)}>
                  {navLinks[subMenu].links.map((link) => (
                    <Link
                      href={`/${link.category}/${link.link}`}
                      key={`nav-link-${link.category}/${link.link}-${link.title}`}
                      onClick={() => setSubMenu(null)}
                      className={cx(s.sub_link, s.main_link_white, s.black)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <div
              className={cx(s.main_link_wrapper)}
              onMouseLeave={() => setSubMenu(null)}
            >
              {rightNavLinks.map((navLink) => (
                <button
                  key={`nav-${navLinks[navLink].title}`}
                  className={cx(s.main_link_btn, s.white)}
                  onMouseEnter={() => {
                    if (subMenu) setSubMenu(null);
                    setSubMenu(navLink);
                  }}
                >
                  {navLinks[navLink].title}
                </button>
              ))}

              {subMenu && rightNavLinks.includes(subMenu) ? (
                <div className={cx(s.subMenu_wrapper, s.orange_bg)}>
                  {navLinks[subMenu].links.map((link) => (
                    <Link
                      href={`/${link.category}/${link.link}`}
                      key={`nav-link-${link.category}/${link.link}-${link.title}`}
                      onClick={() => setSubMenu(null)}
                      className={cx(s.sub_link, s.main_link_orange, s.white)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </Wrapper>
      </nav>
    </>
  );
}
