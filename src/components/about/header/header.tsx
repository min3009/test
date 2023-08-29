import s from "./header.module.scss";

interface Props {
  title: {
    main: string;
    sub: string;
  };
  description: string;
}

export default function Header(props: Props) {
  const { title, description } = props;

  return (
    <div className={s.wrapper}>
      <p className={s.description}>{description}</p>
      <h2 className={s.title}>
        <span className={s.title_main}>{title.main}</span>
        {title.sub}
      </h2>
    </div>
  );
}
