type NavLink = {
  text: string;
  href: string;
};

type ButtonProps = {
  text: string;
  href: string;
  highlight?: boolean;
};

export type Feature = {
  title: string;
  description: string;
  links: NavLink[];
};

export type Term = {
  title: string;
  description: string;
  href: string;
};

type Language =
  | "C++"
  | "Go"
  | "Haskell"
  | "JavaScript"
  | "Python"
  | "Rust"
  | "Scala";

type Site = {
  title: string;
  description: string;
  githubUrl: string;
  languages: Language[];
  defaultLanguage: Language;
  banner: {
    text: string;
    generation: number;
  };
  navbarLinks: NavLink[];
  heroButtons: ButtonProps[];
  features: Feature[];
  nixTerms: Term[];
  mailingListTags: string;
};

export const site: Site = {
  title: "제로 투 닉스",
  description: "Nix와 플레이크를 배우기 위한 가이드",
  githubUrl: "https://github.com/DeterminateSystems/zero-to-nix",
  languages: ["C++", "Go", "Haskell", "JavaScript", "Python", "Rust", "Scala"],
  defaultLanguage: "JavaScript",
  banner: {
    text: "<strong><a target='_blank' class='banner-link' href='https://flakehub.com'>FlakeHub</a></strong>를 확인해 보세요. <strong><a target='_blank' class='banner-link' href='https://determinate.systems'>Determinate Systems</a></strong>에서 제공하는 Nix 플레이크를 발견하고 게시할 수 있는 최고의 장소입니다.",
    generation: 2,
  },
  navbarLinks: [{ text: "About", href: "/about" }],
  heroButtons: [
    { text: "Quick start", href: "/start/install", highlight: true },
    { text: "Concepts", href: "/concepts" },
    { text: "About", href: "/about" },
  ],
  features: [
    {
      title: "선언적이고 재현 가능한 개발 환경",
      description:
        '더 이상 "내 컴퓨터에서만 작동"이라는 생각은 버리세요. 원활하게 작동하고 여러 플랫폼에서 쉽게 공유할 수 있는 환경을 구축하세요.',
      links: [
        {
          text: "Nix 개발 환경 탐색",
          href: "/start/nix-develop",
        },
        {
          text: "개발 환경 만들기",
          href: "/start/nix-develop",
        },
        {
          text: "Nix 개발 환경의 작동 방식",
          href: "/concepts/dev-env",
        },
      ],
    },
    {
      title: "선언적이고 재현 가능한 패키지 빌드",
      description:
        "더 이상 빌드 오류나 알 수 없는 설치 과정은 없습니다. Nix는 항상 패키지를 처음부터 빌드합니다.",
      links: [
        {
          text: "Nix 패키지 빌드",
          href: "/start/nix-build",
        },
        {
          text: "Nix 패키지 작동 방식",
          href: "/concepts/packages",
        },
      ],
    },
    {
      title: "현존하는 가장 큰 패키지 저장소",
      description:
        "Nixpkgs는 80,000개가 넘는 패키지를 제공하고 있으며 매일 성장하고 있습니다.",
      links: [
        {
          text: "Nixpkgs 작동 방식",
          href: "/concepts/nixpkgs",
        },
      ],
    },
    {
      title: "선언적 Linux 시스템",
      description:
        "NixOS는 Nix 언어와 Nix 패키지를 사용하여 선언적으로 구성할 수 있는 고유한 Linux 배포판입니다.",
      links: [
        {
          text: "NixOS 작동 방식",
          href: "/concepts/nixos",
        },
      ],
    },
  ],
  nixTerms: [
    {
      title: "Nix",
      description:
        "선언적이고 재현 가능한 소프트웨어 시스템을 만드는 데 사용되는 빌드 도구 및 패키지 관리자입니다.",
      href: "/concepts/nix",
    },
    {
      title: "Nix language",
      description:
        "Nix에게 패키지, 환경, 시스템을 빌드하는 방법을 알려주는 언어입니다.",
      href: "/concepts/nix-language",
    },
    {
      title: "NixOS",
      description:
        "Nix의 핵심 원칙을 염두에 두고 구축된 Linux 배포판입니다.",
      href: "/concepts/nixos",
    },
    {
      title: "Nixpkgs",
      description:
        "Nix 패키지, 라이브러리, 도우미 함수의 방대한 컬렉션입니다.",
      href: "/concepts/nixpkgs",
    },
  ],
  mailingListTags: [
    "294258", // zero-to-nix
  ].join(","),
};
