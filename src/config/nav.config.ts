export type Items =
  | typeof HEAD
  | typeof SPINAL
  | typeof CHILDREN
  | typeof SPECIALTY
  | typeof CLINIC
  | typeof EFFECT
  | typeof COMMUNITY;

interface Menu_Link {
  title: string;
  links: Array<{ title: string; category: string; link: string }>;
}
type Menu = Record<Items, Menu_Link>;

export const HEAD = "head-clinic";
export const SPINAL = "spinal-clinic";
export const CHILDREN = "children-clinic";
export const SPECIALTY = "specialty-explain";
export const CLINIC = "clinic-about";
export const EFFECT = "effect";
export const COMMUNITY = "community";

export const headerLinks = [
  { title: "안면마비", category: "clinic", link: "face" },
  { title: "이명·난청", category: "clinic", link: "tinnitus" },
  { title: "교통사고", category: "clinic", link: "accident" },
  { title: "학습체력", category: "clinic", link: "children" },
];

export const navLinks: Menu = {
  [HEAD]: {
    title: "머리 클리닉",
    links: [
      { title: "안면마비 클리닉", category: "clinic", link: "face" },
      { title: "인지장애 클리닉", category: "clinic", link: "cognitive" },
      { title: "이명난청 클리닉", category: "clinic", link: "tinnitus" },
    ],
  },
  [SPINAL]: {
    title: "척추·관절 클리닉",
    links: [
      { title: "통증 클리닉", category: "clinic", link: "pain" },
      { title: "교통사고 클리닉", category: "clinic", link: "face" },
      { title: "턱관절 클리닉", category: "clinic", link: "-" }, // TODO: need url
    ],
  },
  [CHILDREN]: {
    title: "소아성장클리닉",
    links: [{ title: "소아성장", category: "clinic", link: "children" }],
  },
  [SPECIALTY]: {
    title: "본수호의 특별함",
    links: [
      { title: "두개천골추나", category: "explain", link: "cst" },
      { title: "자율신경", category: "explain", link: "ans" },
      { title: "미주신경", category: "explain", link: "vagus-nerve" },
      { title: "림프절", category: "explain", link: "lymph-node" },
      { title: "측두골", category: "explain", link: "temporal-bone" },
    ],
  },
  [CLINIC]: {
    title: "한의원 소개",
    links: [
      { title: "한의원소개", category: "about", link: "clinic" },
      { title: "의료진소개", category: "about", link: "doctors" },
      { title: "이용안내 및 오시는길", category: "about", link: "find-us" },
      { title: "한의원 둘러보기", category: "about", link: "look-around" },
    ],
  },
  [EFFECT]: {
    title: "치료 효과",
    links: [
      { title: "치료 사례", category: "therapy", link: "example" },
      { title: "치료 후기", category: "therapy", link: "review" },
    ],
  },
  [COMMUNITY]: {
    title: "커뮤니티",
    links: [
      { title: "공지사항", category: "community", link: "/" }, // TODO: need url
      { title: "문의와 답변", category: "community", link: "/" }, // TODO: need url
      { title: "본수호 칼럼", category: "community", link: "/" }, // TODO: need url
    ],
  },
};
