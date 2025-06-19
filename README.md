# Zero to Nix

[![FlakeHub](https://img.shields.io/endpoint?url=https://flakehub.com/f/DeterminateSystems/zero-to-nix/badge)](https://flakehub.com/flake/DeterminateSystems/zero-to-nix)

[Zero to Nix][site]는 [Nix]와 [플레이크][flakes]를 배우는 여러분의 안내서입니다.
[Determinate Systems][detsys]에서 만들고 유지보수합니다.

## 설정

Nix와 [direnv]가 설치되어 있는지 확인한 후 다음을 수행합니다.

```shell
# Nix 개발 환경 활성화
direnv allow

# 권장
alias npm=pnpm
```

## 사이트 개발

### 로컬에서 실행

개발 모드에서 사이트를 실행하려면 (변경 시 실시간 새로고침):

```shell
dev
```

미리보기 모드에서 사이트를 실행하려면 (정적 웹 서버 사용, 실시간 새로고침 없음):

```shell
preview

# 또는
nix run
```

그런 다음 브라우저에서 http://localhost:3000을 엽니다.

### 로컬에서 검사 실행

이 사이트에는 링크 검사와 같이 [GitHub Actions][gha]에서 실행되는 몇 가지 [CI 검사][ci]가 있습니다.
전체 CI 제품군을 로컬에서 실행하려면:

```shell
ci
```

### 로컬에서 빌드

변경 사항에 따라 사이트가 제대로 빌드될 수 있도록 하려면:

```shell
build
```

또는 사이트도 빌드하는 [전체 CI 제품군을 실행](#run-checks-locally)할 수 있습니다.

### 코드 서식 지정

모든 항목의 서식이 올바르게 지정되었는지 확인하려면:

```shell
format
```

## 게시

Zero to Nix 사이트는 풀 리퀘스트에 대한 배포 미리보기도 제공하는 [Vercel]에 자동으로 게시됩니다.

## 기술

Zero to Nix의 "스택" 🥞:

- 콘텐츠 관리 및 사이트 생성을 위한 [îles][iles]
- 템플릿을 위한 [Vue]
- 콘텐츠를 위한 [MDX]
- CSS를 위한 [Tailwind]

## MDX 구성 요소

이 사이트는 일반적인 Markdown 콘텐츠를 더욱 풍부하게 만들기 위해 여러 사용자 지정 [MDX] 구성 요소를 사용합니다.

| 구성 요소                                                                | 기능                                                                                                                               |
| :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [`Admonition`](./src/components/mdx/Admonition.vue)                      | `danger`, `info`, `success` 또는 `warning` 유형의 경고 블록입니다.<br /><br />`id`를 추가하면 상태 저장 콜아웃 드롭다운이 됩니다. |
| [`Concept`](./src/components/mdx/concepts/Concept.vue)                   | 개념에 대한 마우스오버 가능한 도구 설명을 추가합니다.                                                                                                 |
| [`Language`](./src/components/mdx/stateful/Language.vue)                 | 사용자가 선택한 (프로그래밍) 언어를 표시합니다.                                                                            |
| [`Languages`](./src/components/mdx/stateful/Languages.vue)               | (프로그래밍) 언어 선택기를 제공합니다.                                                                                             |
| [`NixStorePath`](./src/components/concepts/NixStorePath.vue)             | Nix 저장소 경로 구성 요소를 다채롭게 시각화하여 보여줍니다.                                                                         |
| [`Shell`](./src/components/code/Shell.vue)                               | 언어 및 시스템별 셸 명령을 제공합니다.                                                                                  |
| [`SpecificLanguage`](./src/components/mdx/stateful/SpecificLanguage.vue) | 사용자가 특정 언어를 선택한 경우에만 동봉된 콘텐츠를 표시합니다.                                                        |
| [`System`](./src/components/mdx/stateful/System.vue)                     | 현재 선택된 시스템 (Linux vs. macOS)을 표시합니다.                                                                               |
| [`Systems`](./src/components/stateful/Systems.vue)                       | 시스템 선택기 (Linux vs. macOS)를 제공합니다.                                                                                           |

## 디렉터리 구조

| 디렉터리                             | 내용                                                               |
| :------------------------------------ | :----------------------------------------------------------------------------- |
| [`src/assets`](./src/assets/)         | 처리할 자산 (현재는 CSS만 해당)                                      |
| [`src/components`](./src/components/) | 사이트 전체에서 사용되는 [Vue] 구성 요소                                      |
| [`src/layouts`](./src/layouts/)       | 특정 페이지 유형에 대한 [Vue] 레이아웃                                          |
| [`src/logic`](./src/logic/)           | 상태 및 콘텐츠 관리를 위한 TypeScript 도우미 자료                       |
| [`src/pages`](./src/pages/)           | 사이트 콘텐츠 (모든 [MDX]) 및 특정 페이지에 대한 일부 Vue 템플릿 |
| [`public`](./public/)                 | 처리되지 않을 자산 (파비콘 등)                                 |

## 페이지 메타데이터

[빠른 시작 페이지](./src/pages/start/)의 경우:

- `title`
- `summary` (사용자가 가이드에서 수행할 작업 배열)
- `order` (오름차순)

[개념 페이지](./src/pages/concepts/)의 경우:

- `title`
- `snippet` (팝업에 표시되는 개념에 대한 간략한 설명)
- `related` (`flakes` 또는 `nix-store`와 같이 개념 페이지를 나타내는 ID 배열)
- `externalSources` (공식 문서와 같은 외부 소스에 대한 링크 배열)

## 사이트 로직

사이트에서 작업할 때 알아야 할 몇 가지 중요한 파일이 더 있습니다.

- [`src/app.ts`](./src/app.ts)는 전역 페이지 메타데이터를 정의합니다.
- [`src/site.ts`](./src/site.ts)는 제목, 설명, 탐색 모음 링크 등과 같은 사이트 수준 값을 정의합니다.
- [`src/logic/content.ts`](./src/logic/content.ts)는 사이트에 대한 콘텐츠 관리 로직 (형식 안전 페이지 머리말, 문서 가져오기 및 정렬 기능 등)을 제공합니다.
- [`src/logic/state.ts`](./src/logic/state.ts)는 [nanostores] 라이브러리를 사용하여 모든 상태 저장 로직을 정의합니다.
- [`src/logic/theme.ts`](./src/logic/theme.ts)는 밝은/어두운 테마 전환기에 대한 로직을 제공합니다.

## 권장 VS Code 설정

VS Code를 편집기로 사용하는 경우 다음 확장을 추가하는 것이 좋습니다.

- [`Vue.volar`][vsc-vue]
- [`unifiedjs.vscode-mdx`][vsc-mdx]
- [`bradlc.vscode-tailwindcss`][vsc-tailwind]
- [`esbenp.prettier-vscode`][vsc-prettier]
- [`vscode.vscode-typescript-next`][vsc-tsc]

로컬 `.vscode/settings.json`에 다음 설정을 추가하는 것도 좋습니다.

```jsonc
{
  "[mdx]": {
    // 기본적으로 이 확장은 한 줄에 한 문장 정책을 덮어씁니다.
    "editor.formatOnSave": false,
    // 긴 문장에 유용한 도우미입니다.
    "editor.wordWrapColumn": 100,
    "editor.wordWrap": "wordWrapColumn",
  },
  // Prettier 구성을 사용하여 모든 항목 서식 지정
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 검색 결과에서 정크 제외
  "search.exclude": {
    "**/.direnv": true,
    "**/.git": true,
    "**/node_modules": true,
    "dist": true,
    "pnpm-lock.yaml": true,
    "*.d.ts": true,
    "tmp": true,
  },
}
```

[ci]: ./.github/workflows/test.yml
[client-load]: https://iles.pages.dev/guide/hydration#clientload
[detsys]: https://determinate.systems
[direnv]: https://direnv.net
[flakes]: https://zero-to-nix.com/concepts/flakes
[gha]: https://github.com/features/actions
[hydration]: https://iles.pages.dev/guide/hydration#hydration-directives
[iles]: https://github.com/elMassimo/iles
[mdx]: https://mdxjs.com
[nanostores]: https://github.com/nanostores/nanostores
[nix]: https://nixos.org
[site]: https://zero-to-nix.com/
[tailwind]: https://tailwindcss.com
[vercel]: https://vercel.com
[vsc-mdx]: https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx
[vsc-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vsc-tailwind]: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
[vsc-tsc]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next
[vsc-vue]: https://marketplace.visualstudio.com/items?itemName=Vue.volar
[vue]: https://vuejs.org
