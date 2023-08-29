import Wrapper from "@/components/ui/wrapper/wrapper";
import s from "./youtube.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Youtube() {
  return (
    <div>
      <Wrapper>
        <div className={s.header_wrapper}>
          <Image src="/assets/youtube-logo.png" alt="Youtube" width={300} height={80} />
          <h3 className={s.h3}>본수호한의원 유투브 채널</h3>
        </div>

        <div className={s.image_wrapper}>
          <Image
            src="/assets/youtube-channel.png"
            alt="본수호 유튜브 채널"
            width={1200}
            height={500}
            className={s.channel}
          />

          <Link href="https://www.youtube.com/@user-uy7wv6mj9f" className={s.link}>
            <Image
              src="/assets/youtube-channel-logo.png"
              alt="유튜브 채널 로고"
              width={80}
              height={80}
              className={s.channel_logo}
            />

            <span className={s.text}>본수호채널 바로가기</span>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
