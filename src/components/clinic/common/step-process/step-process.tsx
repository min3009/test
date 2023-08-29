import { HTMLAttributes } from "react";
import s from "./step-process.module.scss";
import { cx } from "@/libs/utils";
import Image from "next/image";
import RoundedBanner from "@/components/ui/rounded-banner/rounded-banner";

interface List {
  title: string;
  image: string;
  descriptions: Array<string>;
}
interface Props extends HTMLAttributes<HTMLElement> {
  lists: Array<List>;
}

export default function StepProcess(props: Props) {
  const { lists, className } = props;

  return (
    <div className={cx(className ?? "")}>
      <div className={s.process_wrapper}>
        {lists.map((item, idx) => (
          <div key={`${item.title}-${item.image}`} className={s.card_wrapper}>
            <Image
              src={`/assets/${item.image}.png`}
              alt={item.title}
              width={290}
              height={290}
              className={s.image}
            />

            <RoundedBanner className={s.banner_wrapper}>
              {/* do not show at first index */}
              {item.title}
              {idx !== 0 ? (
                <Image
                  src="/assets/play_button.png"
                  alt="Play"
                  width={60}
                  height={60}
                  className={s.play_image}
                />
              ) : null}
            </RoundedBanner>

            <div className={s.description_wrapper}>
              {item.descriptions.map((desc) => {
                if (!desc) return <br />;
                return <p key={`step-${desc}`}>{desc}</p>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
