'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "307575d6dc6c9b338938c42f6e31774d",
"version.json": "391663c414b6ee005688a9f994fb1fc2",
"index.html": "f43abdeb45c0e7958b781d8359677f80",
"/": "f43abdeb45c0e7958b781d8359677f80",
"main.dart.js": "cfbda9abef40ab4ee716cc65851bb173",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "0dff79908ffeff362e0e697091831efc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6aae1868ddcd7d582c39810d76d2afd6",
"assets/shorebird.yaml": "e162e3ce90ce622dff8e9d210fef74c6",
"assets/AssetManifest.json": "7a5625704787f11af2cb589e43e4aa45",
"assets/NOTICES": "db10db49f2eb8d67d3594a52efe09fbc",
"assets/FontManifest.json": "5b6f0463f9c5af5c2300b97d905e1d6c",
"assets/AssetManifest.bin.json": "a160954a596d597247b5febadd70a079",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/mobkit_dashed_border/images/type2.png": "17a23dec244c3d1bb5b4ae67d7bd48b3",
"assets/packages/mobkit_dashed_border/images/type3.png": "2d50ab9d78a15b2f20012c3b9ea56c46",
"assets/packages/mobkit_dashed_border/images/type1.png": "9f8e612a54622229bd4b97e5357a473c",
"assets/packages/mobkit_dashed_border/images/type4.png": "9250b4ccf17768b5c7d6afcaebadf3f9",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_tex/js/katex/index.html": "2d23b489c76b125f753ff66e91429561",
"assets/packages/flutter_tex/js/katex/contrib/auto-render.min.js": "71052e38485a2b06c4de2928b885aab9",
"assets/packages/flutter_tex/js/katex/contrib/mathtex-script-type.min.js": "59460e758ac5c7357a7a3da78499fb08",
"assets/packages/flutter_tex/js/katex/contrib/mhchem.min.js": "b6038d83e1a8356a1f5474ab51a32c45",
"assets/packages/flutter_tex/js/katex/katex.min.css": "d0d6077daa8d0c3b3aa3a5dca49e8031",
"assets/packages/flutter_tex/js/katex/katex.min.js": "f4e1ebdc2d32cfb3d40663302c96c4ff",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.woff2": "b8b8393d2e65fcebda5fa99fa3264f41",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.woff": "f1cdb692ee31c10b37262caffced5271",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.ttf": "56573229753fad48910bda2ea1a6dd54",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.woff": "5f875f986a9bce1264e8c42417b56f74",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.woff2": "66c678209ce93b6e2b583f02ce41529e",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.woff2": "9108a400f4787cffdcc3a3b813401e6a",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.woff2": "f8a7f19f45060f7a177314855b8c7aa3",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.ttf": "a189c37d73ffce63464635dc12cbbc96",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.woff2": "a9e9b0953b078cd40f5e19ef4face6fc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.ttf": "963af864cbb10611ba33267ba7953777",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.woff": "0e0460587676d22eae09accd6dcfebc6",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.woff": "a25140fbe6692bffe71a2ab861572eb3",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.ttf": "6bf4287568e1d3004b54d5d60f9f08f9",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.woff": "8ffd28f6390231548ead99d7835887fa",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.ttf": "497bf407c4c609c6cf1f1ad38f437f7f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.woff2": "ad546b4719bcf690a3604944b90b7e42",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.woff2": "d8b7a801bd87b324efcbae7394119c24",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.woff2": "61522cd3d9043622e235ab57762754f2",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.woff2": "796f3797cdf36fcaea18c3070a608378",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.woff": "de2ba279933d60f7819ff61f71c17bed",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.ttf": "f2ac73121357210d91e5c3eaa42f72ea",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.woff": "e435cda5784e21b26ab2d03fbcb56a99",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.ttf": "8e431f7ece346b6282dae3d9d0e7a970",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.woff2": "e934cbc86e2d59ceaf04102c43dc0b50",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.woff2": "a9382e25bcf75d856718fcef54d7acdb",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.woff2": "1ac3ed6ebe34e473519ca1da86f7a384",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.ttf": "97a699d83318e9334a0deaea6ae5eda2",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.ttf": "818582dae57e6fac46202cfd844afabb",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.woff": "b0628bfd27c979a09f702a2277979888",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.woff2": "d873734390c716d6e18ff3f71ac6eb8b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.woff2": "f9e6a99f4a543b7d6cad1efb6cf1e4b1",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.woff2": "1b3161eb8cc67462d6e8c2fb96c68507",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.woff": "3045a61f722bc4b198450ce69b3e3824",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.woff": "4de844d4552e941f6b9c38837a8d487b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.woff": "10824af77e9961cfd548c8a458f10851",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.woff": "4cdba6465ab9fac5d3833c6cdba7a8c3",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.ttf": "f60b4a34842bb524b562df092917a542",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.ttf": "fe5ed5875d95b18c98546cb4f47304ff",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.woff": "4788ba5b6247e336f734b742fe9900d5",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.woff": "5f8637ee731482c44a37789723f5e499",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.ttf": "39349e0a2b366f38e2672b45aded2030",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.woff": "ed7aea12d765f9e2d0f9bc7fa2be626c",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.woff2": "1320454d951ec809a7dbccb4f23fccf0",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.ttf": "b9d7c4497cab3702487214651ab03744",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.ttf": "1fdda0e59ed35495ebac28badf210574",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.woff": "ef725de572b71381dccf53918e300744",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.woff2": "652970624cde999882102fa2b6a8871f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.woff2": "82ef26dc680ba60d884e051c73d9a42d",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.woff": "40934fc076960bb989d590db044fef62",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.woff": "a82fa2a7e18b8c7a1a9f6069844ebfb9",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.ttf": "3243452ee6817acd761c9757aef93c29",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.woff": "48155e43d9a284b54753e50e4ba586dc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.ttf": "0d8d9204004bdf126342605f7bbdffe6",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.ttf": "e6fb499fc8f9925eea3138cccba17fff",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.ttf": "27a23ee69999affa55491c7dab8e53bf",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.woff2": "95a1da914c20455a07b7c9e2dcf2836d",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.woff2": "08d95d99bf4a2b2dc7a876653857f154",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.ttf": "52fb39b0434c463d5df32419608ab08a",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.woff": "0e897d27f063facef504667290e408bd",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.ttf": "6589c4f1f587f73f0ad0af8ae35ccb53",
"assets/packages/flutter_tex/js/mathjax/index.html": "38d1f4150e30dc63ccaebfcc9eaaa709",
"assets/packages/flutter_tex/js/mathjax/LICENSE": "3b83ef96387f14655fc854ddc3c6bd57",
"assets/packages/flutter_tex/js/mathjax/MathJax.js": "b2c103388b71bb3d11cbf9aa45fe9b68",
"assets/packages/flutter_tex/js/mathjax/extensions/asciimath2jax.js": "ba4a24f0884938191d5cc8a719050c08",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/HTML.js": "dd05d732ce5a656edd0ef35488d236fe",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/extpfeil.js": "52e41797d7f6c1008c14e06b4bcf9a19",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/action.js": "b291ae5afcf2686e6007e2ad0ac5cb07",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/boldsymbol.js": "567c12ebe2987167bc8bb56382c8bb23",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/noUndefined.js": "133cd9dd68f0e555ecc1358fd707948f",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/autoload-all.js": "4bd547185b751a5499f7cb74b0975f19",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/verb.js": "0a894ca8fcced14fb954975530d125c2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/unicode.js": "6d5c8e9a1069c920832efc089e987d41",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/cancel.js": "6b05f99b08bc0db84d1eedc95d4013ff",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/enclose.js": "c0b4bb3761086f90c82c5cde9a173af2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/color.js": "81ada75a6f4efce1b3b317cbd693af67",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMSmath.js": "2a0d678068a6a80be023bad13a50d845",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mhchem3/mhchem.js": "f29ec4834edb500aaf18d4a4ac5d94ba",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/begingroup.js": "ad78446e91555049457f3ee8e3330ec7",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/text-macros.js": "e26678d55796849a74bb32e2effe9403",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/newcommand.js": "3d30b98aa3e6f9304d8ddf2ded6def5c",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/bbox.js": "ea841d1b20ee93b7ef4268301ae0d6e2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/noErrors.js": "83663e8d081cb5b405482e041be951e5",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMScd.js": "3688a0945311e1a2d4422674c3978f62",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mediawiki-texvc.js": "bab41699c500f82c5e30f204689667bf",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMSsymbols.js": "aef5a6cdabcbb03c017905b91157999d",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mathchoice.js": "da60bce2273c8f343a89f19dd334cb0b",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/autobold.js": "85c15711cd25778da413647db10806f5",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mhchem.js": "e2471e4a8a4f434354af76a55feab242",
"assets/packages/flutter_tex/js/mathjax/extensions/MathML/content-mathml.js": "0ec4a3e1ad4484b0c68a6f757a244532",
"assets/packages/flutter_tex/js/mathjax/extensions/MathML/mml3.js": "d09efa633025b9964d1973933b847df6",
"assets/packages/flutter_tex/js/mathjax/extensions/MathMenu.js": "46871bab94870bbd170c994c28b99240",
"assets/packages/flutter_tex/js/mathjax/extensions/AssistiveMML.js": "39c008cb2bc669cf413f7dbec5eed5c6",
"assets/packages/flutter_tex/js/mathjax/extensions/HelpDialog.js": "a3a81636a5169e8d4bbfd6a91e0d1ce4",
"assets/packages/flutter_tex/js/mathjax/extensions/Safe.js": "43fcac7fb8b68b0e6026b260d29f52b9",
"assets/packages/flutter_tex/js/mathjax/extensions/fast-preview.js": "f82f1573916c74e598b02c0739a123c0",
"assets/packages/flutter_tex/js/mathjax/extensions/MathZoom.js": "0227892f0f35af73e37a7f7019bf366d",
"assets/packages/flutter_tex/js/mathjax/extensions/FontWarnings.js": "54dc42c1c40d7965a622fb01c66b9d61",
"assets/packages/flutter_tex/js/mathjax/extensions/tex2jax.js": "6313aa4e8b7edf452102de2729ec6aed",
"assets/packages/flutter_tex/js/mathjax/extensions/toMathML.js": "bb10d4f7465fa653bbe0dde8ab4a0ac1",
"assets/packages/flutter_tex/js/mathjax/extensions/mml2jax.js": "835e7b107ce67d0e09a002302b64d979",
"assets/packages/flutter_tex/js/mathjax/extensions/MathEvents.js": "1ba83b0ae280ef29dab5fcd2888f5992",
"assets/packages/flutter_tex/js/mathjax/extensions/jsMath2jax.js": "c0161a7cbc5e2b0ab68ec640b0aa8052",
"assets/packages/flutter_tex/js/mathjax/extensions/CHTML-preview.js": "ccd22964427efb2f7b8b5d47a81d0634",
"assets/packages/flutter_tex/js/mathjax/extensions/MatchWebFonts.js": "5ccc51f3e476e49f7dbe199707fb2111",
"assets/packages/flutter_tex/js/mathjax/jax/input/TeX/jax.js": "095f5949e9fcae675246f56a4fa5fa75",
"assets/packages/flutter_tex/js/mathjax/jax/input/TeX/config.js": "c6de0381e92b311e75264dac618de39d",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/jax.js": "addaed8cba00c8777540933e45cf9807",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/config.js": "cf85ea4a5bc5ac677243e755a7c31464",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/e.js": "c11b52d52968ce00245693c04c22d0e5",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/a.js": "997185dd1d2e45dc233bd6b4dd8e4958",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/y.js": "f9807dae1160344aa125404301c8bba0",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/x.js": "af4e41f5e5158b126edb92261a52918b",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/d.js": "9e5558405f28de118492d95d97441aea",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/o.js": "22baa9e0bbb7760311a193a6e0b10b99",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/w.js": "d3ba9e2084b7adf1866b70f6cb9dd413",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/k.js": "6414e632ff2cd2ec868d2976aee1018c",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/s.js": "99fb74daf2d1fd537f7ce35b916fc793",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/scr.js": "d7f570707643fba84335a507bc9a35cc",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/j.js": "8455021e272e277e99236b4a4fb0edd0",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/r.js": "8bf057da0768d9dbf0cfe4fef625f548",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/opf.js": "a241d729bce659ffed7d91c7f66c84ac",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/n.js": "59b4b5b42fb4304785c6212c59cbb82c",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/v.js": "c44170b66aa9a7287b1158006b3a0e16",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/i.js": "770ae1b26b8a2f1a593923ec33855889",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/q.js": "632221c21f96010d8bdc81bbc62b8526",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/m.js": "db49b39bfe1583819efdfce232b4d1e8",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/u.js": "4d765eac78c0046d5552654eea91e4c9",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/l.js": "80abb62bfbdba0bb9742ffac7b034895",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/t.js": "ac6fae5975acbc3a673f8547daa7973f",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/h.js": "3015ebd7f13c11e334c0a7a9ab308767",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/p.js": "ff073de21d6efae5f456d5e31c9cfc31",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/c.js": "4d5c64c1f1f43db2b180f499910dff56",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/fr.js": "eb79fa45457e18414aef18a99d622ea4",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/g.js": "5f51d546a5718a7fe99e89feba054276",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/f.js": "9277e2d9f1d4ac45b51c6aaad3c70bcb",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/b.js": "d973c36cb037c5514a73d0d9b6626966",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/z.js": "f1e3d439bf2837ef365dd1c39484fd1c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/jax.js": "70c06ee3014f9b36027101a7ca1fdd0f",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SuppMathOperators.js": "f8cc084aabc1d52fb0a94457d6d8e7e2",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Latin1Supplement.js": "cb26901092cf263c18de37986141dc74",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MathOperators.js": "08e26ceffc57907eb6f1f4ec8dc39cd2",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GeometricShapes.js": "53a4eb7cee17491160e00656b97ea5be",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/LetterlikeSymbols.js": "509f92c99cab336ecf4adec735adfaac",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Dingbats.js": "059600ef627ed3ed8bb2115b6994942a",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/BasicLatin.js": "cac9b2e71382e62270baa55fab07cc13",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscMathSymbolsB.js": "34d5c8d0c0d1efa6051845cc0830dc85",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SupplementalArrowsA.js": "4645a0b9cb5fba1b5d2ad7605e158dd1",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Arrows.js": "cd22fc0311779024bdf280961e3e0da5",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SupplementalArrowsB.js": "b38a7bc0f88379f31a11ae4f068b769a",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/CombDiactForSymbols.js": "a546cc2e04b694b272d3701d0574d8cc",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GreekAndCoptic.js": "7c3c6d008598e331bae1e26fccfb7f5c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/CombDiacritMarks.js": "f93aa0e2e266bd4c584135477a8c62ed",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscMathSymbolsA.js": "234873cd2f7f069a8f5616c00f7437cc",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SpacingModLetters.js": "a3f8559b799ecacc12683a39e2c29819",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscTechnical.js": "19cd81efdd76cc0fed0c14c05560761c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GeneralPunctuation.js": "da9ce79f07efe980dfd5ca66f879e739",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscSymbolsAndArrows.js": "e8402159215942989336661560724c92",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/jax.js": "983708db351371378d03356a7848f4d1",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/config.js": "2331dfa04ed33a371d8735e1798c4980",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/annotation-xml.js": "5c0a5ac13c601aaa920fe9a99eed23fa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/ms.js": "d6a2a58b5b979b352c0fa9919772618c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mglyph.js": "2fed982e207e72c96899caf9d25dca64",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mtable.js": "b8c87ca1398f29238deb7235a08508ca",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mmultiscripts.js": "5f56f7566baf73e3e745f5f4325e6645",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/menclose.js": "7b2ea9eb6ab045b23927ad91ca7269e4",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/multiline.js": "dbf95bacbdf5b615b1c4c768aa13e192",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/maction.js": "6267f292f88b2f7a011d43e7b2288375",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Monospace/Regular/Main.js": "da942728fba8835448b144bf5978c64d",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size4/Regular/Main.js": "b619df9dbc3d32cf4bf4050a9c0bd4f7",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Misc/Regular/Main.js": "83905891ae1c1ba5113af6dd20752d3f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size3/Regular/Main.js": "632d9bde1dfa761e0b8ca7f6ad528f99",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Alphabets/Regular/Main.js": "efe14a410f0f6068cc8f3295492e9c8a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size2/Regular/Main.js": "288e754ba2854b9523cbcea6ebbbb60c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size5/Regular/Main.js": "fddbbbcd462a8e11582c211334afea0f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Variants/Regular/Main.js": "a0e179664a7f9c7429169f18c62423fa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/SansSerif/Regular/Main.js": "3aa7be9c67f8d7964473e683c646a895",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Operators/Regular/Main.js": "dee87779bf7bd236dfa2582f5c67100e",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Marks/Regular/Main.js": "1ba4c71aae376a97764d6d987c352727",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Latin/Regular/Main.js": "6ea87ff970625b5e69720cea202b3d72",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Shapes/Regular/Main.js": "ace21a50708f5f803b02c659981bbb8f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/fontdata.js": "df1b5ef97cf27cab4d02762d04df2b19",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/NonUnicode/Regular/Main.js": "405ada06bcbd00ce0d8bcbb25a090060",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Script/Regular/Main.js": "0a4bed2eb2cdd41e0ea0f0fba08bd761",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size6/Regular/Main.js": "aeb0ccd2bd94068b57dbf4639961de84",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size1/Regular/Main.js": "288666c04f3e95c93475786725e042aa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Symbols/Regular/Main.js": "d0990851f00fd8c80cc70a31d016110d",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/DoubleStruck/Regular/Main.js": "05efb6ce00d94b5cf3837dff31b3f71c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Normal/Regular/Main.js": "076ba0f589c1743a9c62aa91d42a0bef",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Arrows/Regular/Main.js": "665c0e57895adfb6966675bebdf83863",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Fraktur/Regular/Main.js": "e3614ebdb6144db9f6a7eaa8d28abfb9",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Main/Regular/Main.js": "18979444cbc184de17d8211badbde33a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/fontdata-extra.js": "1f8deeefc60655afe9fa112bd0a0713d",
"assets/packages/flutter_tex/js/flutter_tex.css": "062a3279da48d0913eeeeb0d2266e26f",
"assets/packages/flutter_tex/js/flutter_tex.js": "9ed194ad34c8e76f5310c59e307a3e08",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "961781dc1b5e7d950e6fb8df3100714d",
"assets/fonts/MaterialIcons-Regular.otf": "2f0490cd155bbfe2d16c4b951ab1f828",
"assets/assets/images/ic_rank1.png": "c19ffbd7d726ef3f7976044784898ac8",
"assets/assets/images/img_abcd_button_start.png": "46d4d1e0085886f839ba474e0cc62c2e",
"assets/assets/images/search.svg": "448d350d8d97aa321b4fc682584235f1",
"assets/assets/images/illustrator1.png": "2d1bdcc23b1e0cddb0c88a0e82bbd380",
"assets/assets/images/arrow-down.svg": "c85b90b825b082cc4e86154a6de12bf5",
"assets/assets/images/frame_bg_setting.png": "6901989cc48abce66608a7a017f88af2",
"assets/assets/images/eye-open.svg": "3d274d8ceb71f71d9b40be2ec1b7d7bd",
"assets/assets/images/pump-green.png": "1a2d96b81e13719c305fd59bc542f656",
"assets/assets/images/bg_report.svg": "7743be02c40e440742ab878d880dacdd",
"assets/assets/images/bg_ranking.png": "f814c8e021360ff0b9865bf3eb841d4e",
"assets/assets/images/ic_rank2.png": "9f572d0a07508a041e55e626640ee6d9",
"assets/assets/images/download-transaction.svg": "6863fcc87ff73a37d881b26c123edfee",
"assets/assets/images/checked.svg": "86028d1ba92df9c96b496f00e5115bfe",
"assets/assets/images/icon_button_logout.svg": "d72857fba27e0778d146e5a1fdfde10d",
"assets/assets/images/ic_link.svg": "c31230af9209253b6be7381ba4056225",
"assets/assets/images/bg_library_img.png": "36d680579e940c38b032379b55343d0d",
"assets/assets/images/img_support_setting.png": "a881de32e06eb2274c69bdd77487d918",
"assets/assets/images/user.svg": "d978487e7918a394fe93e5fed7a2c7fe",
"assets/assets/images/bg_block_video.png": "c33e12fff02a91c59f8380a968e7dff9",
"assets/assets/images/img_task.png": "6e019b11fb5941ab570f2b046656385f",
"assets/assets/images/home.svg": "d56189894c301bb66b66ee63ed632c58",
"assets/assets/images/ic_rank3.png": "12dd29fa29e080fb4b7c6aac65500f22",
"assets/assets/images/icon_xep_hang.png": "1c64cb4120cc54550f4383ab798340c9",
"assets/assets/images/sub-warning-version.svg": "f36841270640e64b336db441ad5c82de",
"assets/assets/images/bg-profile.svg": "11a87a8971fbf55c1763cbcba4f6595b",
"assets/assets/images/img_exaam_mission.png": "3990c4ec741fd2490d5d17d8584e38f4",
"assets/assets/images/ic_arrow_forward.png": "23c435b29ce48f645806cafea92634d2",
"assets/assets/images/71.png": "17814203ef5875a3f112e93edf9f358e",
"assets/assets/images/pump-red.png": "44d55e484c4dd38f43ad6b482a7c9948",
"assets/assets/images/logout.svg": "e862fcd7dda2c23b87cef0754ac93672",
"assets/assets/images/ic_save_book.svg": "714e51e4081706d2e22078d7304b79b8",
"assets/assets/images/frame_bg_profile.svg": "10d7a14b2d7aa153c11ceafe0c635ac5",
"assets/assets/images/img_abcd_button_stop.png": "5c00b11d6568430b9ffe88bdb7fd3e37",
"assets/assets/images/check-disable.svg": "c4fd0e449632673a9301fd109dc19122",
"assets/assets/images/warning-version.svg": "c20ea7c4d4f04f4dad775b09f4814cc1",
"assets/assets/images/bg-listapp.png": "9d6b98e3ef296bcbe2f2cec96293a5e1",
"assets/assets/images/70.png": "a77af82a70afcc75ae8f60c02e5fadfc",
"assets/assets/images/ic-up-circle.svg": "156b511387e70031460de2975548484f",
"assets/assets/images/qrcode.png": "7c1118dfbb70dc39ebdddadc2dd1e049",
"assets/assets/images/icon_coin_shop.png": "b2385f9b2b58567caddca724a8ad1677",
"assets/assets/images/img_mission_setting.png": "a2ba55a0e604524bf7ca11f3ab890a89",
"assets/assets/images/ic_eye_hide.svg": "e5e93f993401b9962ac36405be481724",
"assets/assets/images/icon_home_video.png": "9c5151de530ad7a341ad16f925fb3611",
"assets/assets/images/img_splash.png": "31c17302aeb18067be3cea106a20e0d9",
"assets/assets/images/icon_nav_back.svg": "587d4707847ae1920a352179009dbb91",
"assets/assets/images/logo_nexta.png": "a17d6cbb6745c7ebc22c2739f5a7080e",
"assets/assets/images/avt.svg": "03214fdde6f704a3f3611ba1ce9ac065",
"assets/assets/images/8.png": "7d2f0b71dd31455a8a529917663fbac1",
"assets/assets/images/icon_home_theory.png": "061842934bec956bc44bae7cbb8c613b",
"assets/assets/images/ic-down-circle.svg": "a64ea88d92008652023068e490dc7d4a",
"assets/assets/images/layer_blur_book_shelf.png": "dea732a9909a3aba1035747efaa236ef",
"assets/assets/images/ic_back_mission_list.png": "709fa918cea5a60ef466b519d5474bd2",
"assets/assets/images/ic-camera.png": "ca909529c33a61f5e1246eeb16ce5fa3",
"assets/assets/images/IconLiThuyet.png": "65c177a712a5c50fb4fd6a7fcce8fe48",
"assets/assets/images/IconBaiTap.png": "128aa5f910af31bc659f72e3c656d3ec",
"assets/assets/images/ic_book.png": "46d2d43a298dc810bf6231052477a602",
"assets/assets/images/icon_tab_library.svg": "5efe6530fae0bca3eee8d0bb1325247b",
"assets/assets/images/ic_noti_dailytask.png": "e3501c20c96ad3cddeeffb9edde12839",
"assets/assets/images/lock.svg": "9fdf6ecf4d536b4345d28af4b8d3c8c4",
"assets/assets/images/icon_video.png": "c68ec6b62ade7665157972d008fd54e9",
"assets/assets/images/logo-only.svg": "bb25cef5a435bd81f7c3fd5ce6d14393",
"assets/assets/images/ic_close.svg": "edb96775edb18fc00f9a46ce4377dd9c",
"assets/assets/images/shaded_bottom_shop.png": "90155623d341e3c38d7f1c3795c55610",
"assets/assets/images/ic_nexta_edu.png": "9ff78a72365cdc602b72680a3eed9699",
"assets/assets/images/icon_thong_bao.png": "98de473f1581cb11aaa0a9417e161e4d",
"assets/assets/images/icon-draw-eraser.svg": "07b34bc239dbd2635a11656be12ec6a3",
"assets/assets/images/vnpay.png": "fc14b12b2fb64789b71769fcf5f0bf8b",
"assets/assets/images/img_abcd_button_answer_a.png": "1cf49cf871998213cee430c88ad29e84",
"assets/assets/images/ic_library_image.svg": "4b758f55cf0e3eda828e655fd50f4c7a",
"assets/assets/images/ic-camera.svg": "55c84d82f4f1b3485dd984ea503741de",
"assets/assets/images/icon_prefix_input_username.svg": "02d63fac588ec511dc6e5e07b4a94fb3",
"assets/assets/images/img_cat_learning.png": "06b7020ec3c9329e20a2636944801d98",
"assets/assets/images/img_shop_setting.png": "496b3c51bb03be39f419fbcdd1e96580",
"assets/assets/images/arrow-right.svg": "84d2eabb0c80b49cdc66dbe39a3895f9",
"assets/assets/images/avt.png": "9a93070047019a6f3fbbe82368f47c8c",
"assets/assets/images/ic_coin_exam.png": "2bf6ca9979e851941dd832e607dbf7c3",
"assets/assets/images/img_splash.svg": "1edd3cc4ce00136ac9ddabedf0dc5568",
"assets/assets/images/bg_coin.png": "e02feeccc9e9339128836924b92daf38",
"assets/assets/images/img_abcd_button_answer_c.png": "21f9e6726584d21427112e53e904ff0b",
"assets/assets/images/close-circle.svg": "233408cff30aa1194da160c0af5ee57d",
"assets/assets/images/ic-home-trend-up.svg": "cf99fa129a38fe550842c10313a7b7d4",
"assets/assets/images/frame_bg_profile.png": "47781ad6f37db62e6e65c72cbebc2299",
"assets/assets/images/pin.svg": "e81e75489dec84bf93938be739514e0f",
"assets/assets/images/img_abcd_button_answer_b.png": "0cead57f8dd97dbba506020d7e418f4b",
"assets/assets/images/icon_search.svg": "4ea6f01017cae91b57221889d68f03aa",
"assets/assets/images/Gallery.svg": "d5336c2601b73fd3f2cfbc4c6bdb2535",
"assets/assets/images/bg_rank4.png": "e77e70c8ffba684802adf4de05939722",
"assets/assets/images/icon_back.svg": "8b9788b98ca9e45aeef833f29b801345",
"assets/assets/images/ic-back.svg": "0983eed9794d3847cf5ad621d4846e94",
"assets/assets/images/bg-profile.png": "6e8b1e21eab7436f4a68b4b0c7ae1fd6",
"assets/assets/images/border-avt.svg": "d8f1853d7ccc1130897d73da82d7a6a1",
"assets/assets/images/bg_abcd.png": "1bbaa67be93adc6c1938268b8b6b734b",
"assets/assets/images/stt-home.svg": "e29b23ec397686a6fc7a49cb150d9933",
"assets/assets/images/img_task.svg": "f478b3fbc71aa6c5372f948a0fde9827",
"assets/assets/images/stt-dollar-square.svg": "6946eef0609453213a951b346dddbaff",
"assets/assets/images/img_report_setting.png": "68c4bd1e7ae5186737acc83f63a19335",
"assets/assets/images/icon_coin_user_info.png": "3d726886a8bafb82e410dc18514ecd7c",
"assets/assets/images/frame_bg_login.png": "bce54cd7a764a7db970b19e43820bd42",
"assets/assets/images/ic-right.svg": "20b48d314452e97a52074482f65cf956",
"assets/assets/images/bg_rank1.png": "de699ac1816ea6bf928120bb8e9ece9c",
"assets/assets/images/logo-nexta.svg": "cb8d373d71202007218f1caa268ef886",
"assets/assets/images/img_cat_have_bag.png": "f94e2e3bc0e7505900d8fe5ba74969ae",
"assets/assets/images/ic_nav_previous.svg": "b11fcedc2b4407aaee542319fd076d62",
"assets/assets/images/bginfo.png": "5bbc4ea9f4086a784a95b9824a77e4cf",
"assets/assets/images/ic_arrow_back.png": "6f441cfbeffeeba10bf0403b699153a5",
"assets/assets/images/bg_rank3.png": "523f03ae3e7b7957a21e1ac5cdb40323",
"assets/assets/images/img_back_ranks.png": "91c51b8636130d545ffe55a6a1cc005c",
"assets/assets/images/frame_bg_default.svg": "b9634cdfe24adb2feb4df56a15da57f4",
"assets/assets/images/icon_tab_home.png": "2300a4b2a80a81c5a8c1333540509ffd",
"assets/assets/images/check.svg": "7b71938a1733eedd21dd8a0c651b522b",
"assets/assets/images/frame_user_info.png": "a7926cb292b5ece756887ae1eded2fc5",
"assets/assets/images/icon_home_exercise.png": "4d35880be3fb191b3869adfccc00c019",
"assets/assets/images/img_game_setting.png": "3020e5910caca937cd0fec81f79d68a0",
"assets/assets/images/icon_sibar_home_rank.png": "10d0c9c3603ff04558bd186bbd811d89",
"assets/assets/images/cat_downloading.gif": "99c2c0191f2b22c0efbbe8dff8425da5",
"assets/assets/images/img_abcd_button_answer_d.png": "4e09e40c5e6a56c4676ba25b086e6862",
"assets/assets/images/app-icon1.png": "cdc954be9157385667b00fcd7d8a2b61",
"assets/assets/images/bg_rank2.png": "f2414dbe773176a190630b4d8daf9707",
"assets/assets/images/khung.png": "d6be97f1ac0ef99e3f364955d3ee853b",
"assets/assets/images/debt.png": "0ef6c00c3f2c44d4503360f2411a9107",
"assets/assets/images/background.png": "d0c4a0c0809d235217027440bc5c6bf2",
"assets/assets/images/close.svg": "7cd1cb037d7f3a86173bb6d7de71ea84",
"assets/assets/images/ic_eye.svg": "c6737939cfa6e23cf44a6d3654b7c0f5",
"assets/assets/images/icon_prefix_input_password.svg": "cb2c623a33611d0ebf4db8b96a2dfcc1",
"assets/assets/images/ic_arrow_down_dropdown.svg": "f926e6cfc75835c7bdb71301a583ba62",
"assets/assets/images/img_coin.png": "e41ec3c6d689a841cd466e9b6b226011",
"assets/assets/images/img-header-login.svg": "9e8fccbd7b8111fb9664708d837e20ee",
"assets/assets/images/top-4.png": "342ce7a72e7fc8b2bf861babd43868f6",
"assets/assets/images/refresh.svg": "16a67022610711ac152a739072375bb1",
"assets/assets/images/top-5.png": "840b8a440579b8fba7929b602257b03a",
"assets/assets/images/bg_info_home.svg": "837765bbfc9df5d1d4925ac1b2af1717",
"assets/assets/images/ic_nav_next.svg": "155a36096152ee642d9e6e906b3e5251",
"assets/assets/images/ic-logout.png": "5d25ed634ea98370379e3e70860ea053",
"assets/assets/images/logo-transparent.png": "e33b73bdbda8a0bcfecec83b8466ff3d",
"assets/assets/images/avatar.png": "e43d078e90da156011877783e02b67b1",
"assets/assets/images/avt1.png": "6cfc89920316e59e46163c2b743fcb57",
"assets/assets/images/ic_coin_mission.png": "885d00c95099dd5c8c51bb9e62cd69e4",
"assets/assets/images/uncheck.svg": "db6fcde42470e27fa1476fcc566ae3c3",
"assets/assets/images/setting.svg": "f70ce626bc579646c098bd0a2aac64dd",
"assets/assets/images/icon_cup_user_info.png": "3c3dc7359d54e0b157743026f8ec479f",
"assets/assets/images/ic_back_left.svg": "643113ba002330a95644912651ef56be",
"assets/assets/images/img_rank_report_setting.png": "e5b2900a0c8b10d03875a3cb35d9b158",
"assets/assets/images/vietqr.png": "070d321cd8545ced0318037d5f0ad05d",
"assets/assets/images/crown.svg": "7896dbd429bebf2b0d2ac83011381089",
"assets/assets/images/frame_bg_rank.png": "69c7c98d937115fac7ef21dbedc10c51",
"assets/assets/images/notification.svg": "0f6e27837fdc68d228fe142ee5ca83e0",
"assets/assets/images/image_customer_help_phone.svg": "76948357cdfae3bfc56bd7d0c70d3929",
"assets/assets/images/bill.svg": "2665034ec7cc975ad39fc2542b205f3f",
"assets/assets/images/logo/logo_nexta_profile.svg": "89bbf914c1bfc0eb8d43ee1df224e597",
"assets/assets/images/logo/logo_nexta_termsofuse.svg": "4041fe57b5b02d57c55d99cd389598ab",
"assets/assets/images/logo/ic_launcher.png": "5d2aad2dd136dd829291d926fb05db96",
"assets/assets/images/exercise/icon_explain_answer.svg": "2df87917bed0ffa3c2881b1d9bfab722",
"assets/assets/images/exercise/icon_check_answer_is_success.svg": "56a13295e882616c9937f5ab4ed9c151",
"assets/assets/images/exercise/icon_timer.svg": "1b4a846f07e2c540dd8b67e1df1670a9",
"assets/assets/images/exercise/icon_play_audio.svg": "6147337275dbd417cf0d45a463409bae",
"assets/assets/images/exercise/icon_coin_active.png": "aa14c48d11e4d2232c425a914b9e69ff",
"assets/assets/images/exercise/img_popup_level.png": "59c35d1d91336fb5db228c1d3cbad490",
"assets/assets/images/exercise/icon_checkbox_success.svg": "89551201e6b95090d412d88a22c737af",
"assets/assets/images/exercise/icon_pause_audio.svg": "b7d3ec11ce600a4fd5f19c57a4df95b4",
"assets/assets/images/exercise/img_popup_exercise_submit.png": "0ed7ba0054a18046624576770edab137",
"assets/assets/images/exercise/icon_checkbox_failure.svg": "a95dd2b3d2023fd5cad6efb966faef35",
"assets/assets/images/exercise/icon_coin_active.svg": "a8cd3a64760732feed3ecafc752ad2dd",
"assets/assets/images/exercise/icon_check_answer_default.svg": "e9115ac1eeb76a8889b53a9679233581",
"assets/assets/images/exercise/image_background_exercise_result.png": "80dfcfe68d285ad2730f5e3af96d6ce2",
"assets/assets/images/exercise/icon_check_answer_is_failure.svg": "594cdb3acecf2d16e56530e2b541b1ab",
"assets/assets/images/exercise/button_check_result_default.svg": "3e68f0561faec6ae312d695c08cd681b",
"assets/assets/images/exercise/button_check_result_active.svg": "53da07fb177f1beaab4febca1f063608",
"assets/assets/images/exercise/icon_coin_default.png": "b7eaee7bd385412a5d7993443d5fbc1f",
"assets/assets/images/exercise/button_check_result_failure.svg": "dd9676f1694c4718e63f7f71beb59a37",
"assets/assets/images/exercise/icon_coin_default.svg": "3806506901a4e56c19c45026b999cb4d",
"assets/assets/images/exercise/img_demo_3.png": "fcc8db1b9311b8d27640bb079e12a8fc",
"assets/assets/images/exercise/button_check_result_success.svg": "0544b8dbf2c6e79acf064cd902cc077d",
"assets/assets/images/exercise/img_expression_demo_1.svg": "f772747ae825968fa4ebd22455a16c92",
"assets/assets/images/exercise/icon_draw.svg": "08721c6ab6b211c9dac3bb1d93bb1b55",
"assets/assets/images/exercise/img_demo_1.png": "d5d804c3bcb736c2f543c0999d82ded5",
"assets/assets/images/exercise/image_demo_2.png": "f4395ece3e8066e6cc5ed3bf15b01aca",
"assets/assets/images/exercise/icon_check_answer_is_doing.svg": "49fb50bc8d468b3980d18d6912334eb5",
"assets/assets/images/exercise/img_demo_4.png": "86e89cf145262ce6be5c8b5d6fea03f7",
"assets/assets/images/exercise/img_popup_exercise_stop_doing.png": "53684aa74ce64d9e316b235686878763",
"assets/assets/images/redo.svg": "d943888a7517c7bea62f97dace4abda9",
"assets/assets/images/ic_back_dailytask.png": "aaf00b4c16cc3fdbb005b60772fc63b3",
"assets/assets/images/check-green.svg": "58ebbc74f3e3a81ee687b0dc40402bb6",
"assets/assets/images/img_cat_have_pen.png": "43529fcd49085e4fce6e76a3a203d996",
"assets/assets/images/pos.png": "696dd0f49fa1ab20aa20e0ea5a236b76",
"assets/assets/images/imgBook.png": "77acff5ada5176259a69ffa28bac6281",
"assets/assets/images/app-icon.png": "9034c6a449a17726a71775b3b8b67727",
"assets/assets/images/top-2.png": "71521dc251c3362c52b9155ff7c89c9f",
"assets/assets/images/bg_block_theory.png": "0ae2b39b25aa9c57919441d827f62f30",
"assets/assets/images/ic_send_message.svg": "4d1c766480c81477e0d828af3127278a",
"assets/assets/images/top-3.png": "fae74e442b667e098a29c7f6172b8ada",
"assets/assets/images/img_exam_mission.png": "68acd96dcc9262985e0a7de44d52acd4",
"assets/assets/images/icon_sibar_home_notification.png": "20b1ed8ef77978a7b41dcf78327608a6",
"assets/assets/images/ic_back_book_detail.svg": "0471274ff73236f295dd33ab3979f4e0",
"assets/assets/images/ic_line_vertical.svg": "959ba82e28f628573d6f6b2179247ef7",
"assets/assets/images/avatar_shop_default.png": "a437ab9a2b66a0868690feee6dec8a76",
"assets/assets/images/icon_tab_profile.svg": "c65c4449934907fc3233fea7c0acce3c",
"assets/assets/images/icon_home.png": "0c7c6bcd54070a290b5432201dd4a5c8",
"assets/assets/images/bg-dot.svg": "298c9eb772cb7eb6f5ce8eaff0ef807b",
"assets/assets/images/bg_ranks_screen.png": "86b6d26789a34e8d6ba65b579b83806e",
"assets/assets/images/ic_arrow_down.svg": "3fbf30094cefda7177d502714d6a83ce",
"assets/assets/images/top-1.png": "0aada2bb760f38a0cd72d714b36a063d",
"assets/assets/images/success.png": "84eeec9cde8d7d78eced0600b5c0db2d",
"assets/assets/images/logo-hint.png": "f38c7a32385d0218fb72238573d39ffb",
"assets/assets/images/ic-box.svg": "209ad8189c7e2e20a89bd202f3bf03fe",
"assets/assets/images/btn_begin.svg": "997a02a414dac89906dfa24fc6ca378a",
"assets/assets/images/ic_person.svg": "5ad96f075d3ca695683f62a4980d890d",
"assets/assets/images/qr.svg": "edd454fef6962d266ffa213543bbd824",
"assets/assets/images/frame_bg_header.png": "7b7efca061b9a832ab2c7d1cf9048de2",
"assets/assets/images/avatar_user_info.png": "396bff7050b30b17ed9bdc8fb5f1d558",
"assets/assets/images/bg_block_exercise.png": "241b0c14edad99582fb83c0204c49052",
"assets/assets/images/cash.png": "d1cd5874973b073fa2190feba858d6e9",
"assets/assets/images/bg_task.png": "0bc821c4463bae1480c8d954c35bfabb",
"assets/assets/images/icon_tab_app.svg": "a975e3eda16ed61205010889b95f4de1",
"assets/assets/images/failure.png": "484bcdd96b961d87e928736d2c1a1c4b",
"assets/assets/images/ic_back.svg": "909593da7c0bf02f55b3e74578b9a2bf",
"assets/assets/images/Checkbox.png": "0699b00cde435b258bbf4e877bc3e0d3",
"assets/assets/images/icon-book-arrow-circle-right.svg": "22e1b3ecc00191c86023d2b3d763765a",
"assets/assets/images/img_bg_splash.png": "4ac5d744eb8eabc44577a237f3e92eca",
"assets/assets/images/img_book_demo.png": "58b3a9758a64ff5e90b9201ce5f717c3",
"assets/assets/images/logo-yellow.svg": "78ba41ccdda9a0014135043244a59864",
"assets/assets/images/bg_home.png": "9ef3e260506c0e222484c8b19b9e6999",
"assets/assets/images/pump-blue.png": "00030ad16cba4a305c44022a6ae028f3",
"assets/assets/images/filter.svg": "3b35486f0b9f52cfba70e627396981fa",
"assets/assets/images/stt-presentation-chart.svg": "35c9231a3f36895ab90666b36f48906d",
"assets/assets/images/calendar.svg": "a87d75931fd59713eeb6ed080907811e",
"assets/assets/images/frame_bg_permission_app.png": "547af6915ff42312e2949599e8d41166",
"assets/assets/images/arrow-left.svg": "d257a7580ff9dfe2c529d35639ca290c",
"assets/assets/images/bg_login_screen.png": "f36fddbe072f1ea8e19afabde4649a6b",
"assets/assets/images/img_chat_setting.png": "b97b5d849d2f2b8149c2f3d89cbea32d",
"assets/assets/images/img_header_rank.png": "8d9e4d558b4f7a706808e4091ed907ef",
"assets/assets/images/img_cat_mission.png": "3757ee82fc7a3e7d2823c6f5a3f0f72f",
"assets/assets/images/bg-pattern.svg": "afc74111d75e24ad87c75822f71b6ce0",
"assets/assets/images/78.png": "e5ed2b8080de1ea9572acc5f2f64f84f",
"assets/assets/images/logo.svg": "104ec1233609e25eb354568ca46f7e42",
"assets/assets/images/bg_shop_default.png": "e8a6b53369c86aac70241bb7ce488634",
"assets/assets/images/img_popup_system_error.png": "414eadd640b9001ce48047e34d28dad6",
"assets/assets/images/ic_arrow_up.svg": "e04bcb9a0488c401e8d7fda5bb76ef3b",
"assets/assets/images/icon_button_update_avatar.svg": "9cdab923ee8dbc3d0b4362caec18cf52",
"assets/assets/images/ic_next_daily_task.png": "c896afe9a031528165c05291840f8f7d",
"assets/assets/images/napas.png": "53839f224328f53f5bc12cfd541d4d2d",
"assets/assets/images/book_cover_default.png": "82c48f030b30aa70ad70150669c7e463",
"assets/assets/images/khung2.png": "e002f144f8950712508219dfffbdbdcd",
"assets/assets/images/icon_chat_search.svg": "4a088e41d8bd2645ad380a1058221818",
"assets/assets/images/bg-line-2.svg": "1b10c207537a8978a21bb007b7101847",
"assets/assets/images/frame_shop_default.png": "0d81fe5904975aee47e38e9053bb85ed",
"assets/assets/images/stt-status-up.svg": "4935cab7377bae9ace4ad9e26a415b06",
"assets/assets/images/ic-logout.svg": "f26161be9194276a8d0016c0e6e5aa37",
"assets/assets/images/icon-draw-pencil.svg": "9d30f5a19f1cae1ac482e44fe5e63d63",
"assets/assets/images/history.svg": "a2a03536ee2f2d497f1ff12576a8f195",
"assets/assets/images/icon-book-arrow-circle-left.svg": "df2c1e2a1bb28a8d179295bf6879d665",
"assets/assets/images/header_title_rank.png": "58b269dcbfed6a36b8018ee6ae98e069",
"assets/assets/images/khung1.png": "c66e12f43c304533f9072a04a8bbb0cb",
"assets/assets/images/ic-eye-close.svg": "ef899febf1f3b08beeb5bb51fe4fb1df",
"assets/assets/mathjax/config/TeX-AMS_HTML.js": "a37b93f298c1bc3155c20e2d6ea218a3",
"assets/assets/mathjax/config/TeX-AMS_CHTML.js": "435142ca09950f7ed07399d8619865ea",
"assets/assets/mathjax/config/TeX-MML-AM_SVG.js": "d3549c49685c76f61fe1316218a73883",
"assets/assets/mathjax/config/TeX-AMS_HTML-full.js": "adc3bbaf2b46c16381d02bcdecbe80cd",
"assets/assets/mathjax/config/MML_SVG-full.js": "c440c86d152c8078477af91a7a2ca2f6",
"assets/assets/mathjax/config/MML_CHTML.js": "7aabce4f3001fb13fdc35d6b8f6cd0ed",
"assets/assets/mathjax/config/AM_HTMLorMML-full.js": "8ecbac5a5f07cb2486f604d6d77dde08",
"assets/assets/mathjax/config/TeX-MML-AM_HTMLorMML-full.js": "31d9c6a6d8181dcd696763615773c290",
"assets/assets/mathjax/config/AM_SVG.js": "f539ee80e2d241b50b321be0ac368d2f",
"assets/assets/mathjax/config/AM_SVG-full.js": "74aacf624f7bcc1858f4d85b63a45fcf",
"assets/assets/mathjax/config/MML_HTMLorMML.js": "617855266ac1b68ce31268274b6a6397",
"assets/assets/mathjax/config/TeX-AMS_SVG.js": "6a6df8c426dd3bcb9df54469d5514eea",
"assets/assets/mathjax/config/MML_HTMLorMML-full.js": "781fdc8774f88bbd1e586bf6a0981384",
"assets/assets/mathjax/config/TeX-AMS_CHTML-full.js": "34602027eb5173e50099cbfc3beab49c",
"assets/assets/mathjax/config/Safe.js": "12ce34d39ea35b1ce16b8e18c3d59aec",
"assets/assets/mathjax/config/TeX-AMS-MML_SVG-full.js": "1088fbafd3f6783cf63b9b2c225f17ab",
"assets/assets/mathjax/config/TeX-MML-AM_CHTML-full.js": "d0410e31ed295664821320a8d745cc1d",
"assets/assets/mathjax/config/AM_CHTML.js": "a00375635a1fc3c819dd308b4f0928a0",
"assets/assets/mathjax/config/TeX-MML-AM_HTMLorMML.js": "bb82df21c6c371a1a5c40e1c9ab09e25",
"assets/assets/mathjax/config/Accessible-full.js": "16e3df49ea01c8cdee38ddd603a8ab62",
"assets/assets/mathjax/config/MML_SVG.js": "b40393721135ccdc9a22e77f7a7c6dc7",
"assets/assets/mathjax/config/Accessible.js": "c44c6ff909f77a772aabd8189c89b60c",
"assets/assets/mathjax/config/TeX-MML-AM_CHTML.js": "3b2b668543a150a8c64d2ed7bdf45b67",
"assets/assets/mathjax/config/AM_CHTML-full.js": "5e2c3f987648cb7dc28ad0217d44fa56",
"assets/assets/mathjax/config/MML_CHTML-full.js": "457d4a3cd839e0b49e355d941f2a21e1",
"assets/assets/mathjax/config/default.js": "dc0a992aef27b64ae59c653a0853a37c",
"assets/assets/mathjax/config/TeX-AMS-MML_HTMLorMML-full.js": "861480d3c0b0c56de8a0fee7222a0c0f",
"assets/assets/mathjax/config/MMLorHTML.js": "1f1e1584c5b5e737ad0bf95fdc3cd7a4",
"assets/assets/mathjax/config/TeX-MML-AM_SVG-full.js": "d5cb8ac04050983170ae4af145bc66ff",
"assets/assets/mathjax/config/TeX-AMS-MML_SVG.js": "d62d6cf2c65943b486a9be90fb8f786d",
"assets/assets/mathjax/config/AM_HTMLorMML.js": "03c3739422bc5c1ecd5eb11603e955f8",
"assets/assets/mathjax/config/TeX-AMS_SVG-full.js": "2e871c8d814b4988b6c3d1faca65c7d3",
"assets/assets/mathjax/config/TeX-AMS-MML_HTMLorMML.js": "a12e19d65cbaa241d2ec6afbacf6c9b7",
"assets/assets/mathjax/MathJax.js": "b2c103388b71bb3d11cbf9aa45fe9b68",
"assets/assets/mathjax/extensions/asciimath2jax.js": "ba4a24f0884938191d5cc8a719050c08",
"assets/assets/mathjax/extensions/MathMenu.js": "46871bab94870bbd170c994c28b99240",
"assets/assets/mathjax/extensions/AssistiveMML.js": "39c008cb2bc669cf413f7dbec5eed5c6",
"assets/assets/mathjax/extensions/HelpDialog.js": "a3a81636a5169e8d4bbfd6a91e0d1ce4",
"assets/assets/mathjax/extensions/Safe.js": "43fcac7fb8b68b0e6026b260d29f52b9",
"assets/assets/mathjax/extensions/fast-preview.js": "f82f1573916c74e598b02c0739a123c0",
"assets/assets/mathjax/extensions/MathZoom.js": "0227892f0f35af73e37a7f7019bf366d",
"assets/assets/mathjax/extensions/FontWarnings.js": "54dc42c1c40d7965a622fb01c66b9d61",
"assets/assets/mathjax/extensions/tex2jax.js": "6313aa4e8b7edf452102de2729ec6aed",
"assets/assets/mathjax/extensions/toMathML.js": "bb10d4f7465fa653bbe0dde8ab4a0ac1",
"assets/assets/mathjax/extensions/mml2jax.js": "835e7b107ce67d0e09a002302b64d979",
"assets/assets/mathjax/extensions/MathEvents.js": "1ba83b0ae280ef29dab5fcd2888f5992",
"assets/assets/mathjax/extensions/jsMath2jax.js": "c0161a7cbc5e2b0ab68ec640b0aa8052",
"assets/assets/mathjax/extensions/CHTML-preview.js": "ccd22964427efb2f7b8b5d47a81d0634",
"assets/assets/mathjax/extensions/MatchWebFonts.js": "5ccc51f3e476e49f7dbe199707fb2111",
"assets/assets/fonts/averta/Averta-BoldItalic.otf": "4b53e6f332ec7846d5757a377b13258c",
"assets/assets/fonts/averta/Averta-ThinItalic.otf": "74ae5baf983f68fe6e080ea6edb26492",
"assets/assets/fonts/averta/Averta-Light.otf": "249bf54b6465ce09726ebd7e3d5accd6",
"assets/assets/fonts/averta/Averta-Regular.otf": "8d2a59a3e2ccef1e345f74649078f140",
"assets/assets/fonts/averta/Averta-RegularItalic.otf": "fc9776e652fc600eeeb74aaa352c2282",
"assets/assets/fonts/averta/Averta-SemiBoldItalic.otf": "c8df2e04d490b5ab6259e451dbf7df30",
"assets/assets/fonts/averta/Averta-LightItalic.otf": "721b5a567bc7a6675921246c60e1552e",
"assets/assets/fonts/averta/Averta-ExtraBold.otf": "fb4b0bd9392693a879e32e451c0aac81",
"assets/assets/fonts/averta/Averta-Bold.otf": "1fcf56df592e6a5c8639efd7e08b80a0",
"assets/assets/fonts/averta/Averta-SemiBold.otf": "80ffa568c34258bf5c538ab758ff1983",
"assets/assets/fonts/averta/Averta-Thin.otf": "546c7554381ea622537bd97e944bc1ef",
"assets/assets/fonts/averta/Averta-Black.otf": "ac8961c3bd3c95ab894e506a35e51c5d",
"assets/assets/fonts/averta/Averta-ExtraBoldItalic.otf": "00a052547aabd46853b5f70cc8ea1754",
"assets/assets/fonts/averta/Averta-BlackItalic.otf": "e1b84c9e9a6640ce202e738385115759",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-Black.otf": "386ff90afafa67cf58ccea2fd174b09b",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-Regular.otf": "b447f6ec280b01089e5e4eff178499fd",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-Extrabold.otf": "f716f4e8434de8078e4c9e31821704b8",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-Semibold.otf": "7ba9c33d6780b69087c9a2ee970bc038",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-Thin.otf": "c3fe00654a995e270029ba65d94c658b",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-ThinItalic.otf": "ba48e9b25bd56aba0025c49f3606ed47",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-BoldItalic.otf": "0a56b925644fa90b6dddc37b5cdb0977",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-SemiboldItalic.otf": "c4f9541691e7df3cda983f2ae70d6c36",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-RegularItalic.otf": "690cee4becbf0bcf8dd23ba36436d883",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-Bold.otf": "28c0e1ef86bad6420cc0071488bfdb84",
"assets/assets/fonts/avertaStdCY/AvertaStdCy-Extrathin.otf": "08093e4528fb853d3cf963e459c4a57f",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-LightItalic.otf": "54f8bc5189bc8c198d054b7fdbb99a92",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-BlackItalic.otf": "dbf6ff857baf0bc42f1ab0d225dc8092",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-Light.otf": "25aee95bce873e0cd852375fa18e3c1b",
"assets/assets/fonts/avertaStdCY/AvertaStdCy-ExtrathinItalic.otf": "1c304cbd8e2cb41e1ce4b82e36adf7bd",
"assets/assets/fonts/avertaStdCY/AvertaStdCY-ExtraboldItalic.otf": "c2903a19f066ce39df31b26fa01eb792",
"assets/assets/fonts/noto/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/fonts/montserrat/Montserrat-MediumItalic.otf": "f15ca5fe6efcb2893541ee7ad896c275",
"assets/assets/fonts/montserrat/Montserrat-Bold.otf": "9c71d42b6a840ecfda8fc555040a1c76",
"assets/assets/fonts/montserrat/Montserrat-BlackItalic.otf": "3da12a02bb360cd21abc432517b546d2",
"assets/assets/fonts/montserrat/Montserrat-BoldItalic.otf": "81f56370a912bac75d5ad4bd3c52ac55",
"assets/assets/fonts/montserrat/Montserrat-Light.otf": "d4a8834fa8f57f0929b9f4ef89584361",
"assets/assets/fonts/montserrat/Montserrat-ThinItalic.otf": "4e85bb77e2e7805a17a9b5aa06a5420e",
"assets/assets/fonts/montserrat/Montserrat-Thin.otf": "cb2144b361907d6549a80a5203f07347",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.otf": "2ec7cecb19c1b42ca9ca709971016156",
"assets/assets/fonts/montserrat/Montserrat-LightItalic.otf": "fad9ab039c3de5ab6b85f6fc87c85481",
"assets/assets/fonts/montserrat/Montserrat-Medium.otf": "d815b0a29adf3450c55f56e2fb813be4",
"assets/assets/fonts/montserrat/Montserrat-SemiBoldItalic.otf": "eee96022889810e6ff89d39829e29187",
"assets/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.otf": "965b7ea0f52031a9d292e6fe55ab9060",
"assets/assets/fonts/montserrat/Montserrat-Italic.otf": "3fcbdb4c29e43e3a56918081e68319e1",
"assets/assets/fonts/montserrat/Montserrat-Regular.otf": "92db9a0772b3732e6d686fec3711af42",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.otf": "433ac418a603294fc5891dde6a73cd24",
"assets/assets/fonts/montserrat/Montserrat-ExtraLightItalic.otf": "3b26932636b21dcbc04dc2263af696f8",
"assets/assets/fonts/montserrat/Montserrat-Black.otf": "561246a3549d3b797b4b611652a79d7c",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.otf": "bb3740d350b0186ce32b5678972bf061",
"assets/assets/fonts/roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/timesNewRoman/Times-New-Roman.ttf": "4aa25ae5255896a14e6982eef8a0ee75",
"assets/assets/fonts/mulish/Mulish-LightItalic.ttf": "a5f011249bc8904a1696d7bea4940543",
"assets/assets/fonts/mulish/Mulish-ExtraBoldItalic.ttf": "fa928cf071fb1afc39aee8ea64cb7905",
"assets/assets/fonts/mulish/Mulish-Regular.ttf": "5416a925ffafb775c6bffd116d87deb0",
"assets/assets/fonts/mulish/Mulish-Black.ttf": "5e373d52c280283cb9aa3917ae0c40e2",
"assets/assets/fonts/mulish/Mulish-BlackItalic.ttf": "e23959a8d3a4c8916f258299a52192af",
"assets/assets/fonts/mulish/Mulish-SemiBoldItalic.ttf": "0a888514cc9e0946c4bb3b0103f9287e",
"assets/assets/fonts/mulish/Mulish-ExtraLightItalic.ttf": "b729ccfc6838570d929a06a8ae41c6c5",
"assets/assets/fonts/mulish/Mulish-Bold.ttf": "b7fa867b7522c7629eca3c4b9f31d3c8",
"assets/assets/fonts/mulish/Mulish-Light.ttf": "a12ad93579e2da6f8cecb2e89f413a4c",
"assets/assets/fonts/mulish/Mulish-ExtraBold.ttf": "2000e3092f7d4527368cb41d357fe356",
"assets/assets/fonts/mulish/Mulish-ExtraLight.ttf": "c07e2efe99c3f232b9011aac63b0389b",
"assets/assets/fonts/mulish/Mulish-Medium.ttf": "95fb28784ad39295fdd64be6662d81d7",
"assets/assets/fonts/mulish/Mulish-MediumItalic.ttf": "a2826d91ba780aa9de5181e13d7b847a",
"assets/assets/fonts/mulish/Mulish-SemiBold.ttf": "a4e6f571273de05494ef24d6fb65c885",
"assets/assets/fonts/mulish/Mulish-BoldItalic.ttf": "3e40b1e17a4fe836e71d293c32c2fc06",
"assets/assets/translations/vi.json": "5bff7cf3c21ddbe0e790e52a02024467",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
