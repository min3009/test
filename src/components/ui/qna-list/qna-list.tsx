import Image from "next/image";
import { HTMLAttributes } from "react";
import { cx } from "@/libs/utils";
import s from "./qna-list.module.scss";
import RoundedBanner from "../rounded-banner/rounded-banner";

interface List {
  title: string;
  descriptions: Array<string>;
  image?: {
    description: string;
    url: string;
  };
}

interface Props extends HTMLAttributes<HTMLElement> {
  lists: Array<List>;
}

export default function QnaList(props: Props) {
  const { className, lists } = props;

  return (
    <div className={cx(s.qa_list, className ?? "")}>
      {lists.map((qa, idx) => (
        <div key={`qna-${qa.title}`}>
          <div className={s.banner_wrapper}>
            <RoundedBanner className={s.banner}>Q{idx + 1}</RoundedBanner>
            <span className={s.text}>{qa.title}</span>
          </div>

          {qa.image ? (
            <div className={s.graph_wrapper}>
              <p className={s.graph_description}>{qa.image.description}</p>
              <Image
                src={`/assets/${qa.image.url}.png`}
                alt="복용 그래프"
                width={1200}
                height={300}
                className={s.image}
              />
            </div>
          ) : null}

          <div className={s.desc_wrapper}>
            {qa.descriptions.map((desc) => {
              if (!desc) return <br />;
              return <p className={s.desc}>{desc}</p>;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
