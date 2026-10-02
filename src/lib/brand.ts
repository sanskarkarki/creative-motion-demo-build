// brand.ts — everything this site says, in one place.
//
// Pointing the page at a different product means editing this file and nothing
// else: the header, the display line, the corridor panel and the specification
// grid all read from here.
//
// Every claim below is drawn from the project's own README. There are no
// benchmark figures anywhere, on purpose. The two established products in this
// space are in an open dispute over whose numbers are real, so a third set of
// unaudited numbers would buy nothing, and the project is early enough that any
// figure would be invented. What it has instead is a schema, and a schema is
// checkable.

/** A tile in the specification grid. Header and footer tiles carry no note. */
export interface GridCell {
  id: string;
  kind: 'wide' | 'brand' | 'text';
  /** row-start / column-start / row-end / column-end, across four columns */
  area: string;
  title: string;
  note?: string;
}

/*
 * Four rows. The first and the last run the full width, and the middle band is
 * one tall block on the left against a wide line and a single square on the
 * right, with one cell left unclaimed so the hatch shows through.
 *
 * Nothing here is a paper number. A reader who does not already know the
 * literature learns nothing from "arXiv 2502.06975", and a tile that teaches
 * nothing is decoration wearing a technical costume. Every cell below is a
 * thing the repository actually contains.
 */
const GRID: readonly GridCell[] = [
  { id: 'head', kind: 'wide', area: '1 / 1 / 2 / 5', title: 'Demo Build' },
  {
    id: 'demo', kind: 'brand', area: '2 / 1 / 4 / 3',
    title: 'demo', note: 'This is a demo build created to explore a different visual direction, layout, and interaction style. It is not a product, and it is not a service. It is a demonstration of what the project can do, and it is not intended to be used as a real assistant.',
  },
  {
    id: 'ops', kind: 'text', area: '2 / 3 / 3 / 5',
    title: 'demo build',
  },
  {
    id: 'demo', kind: 'brand', area: '3 / 4 / 4 / 5',
    title: 'demo', note: 'demo build',
  },
  {
    id: 'foot', kind: 'wide', area: '4 / 1 / 5 / 5',
    title: 'Demo Build',
  },
];

/** One address for the project, used by the mark, the nav and the socials. */
const REPO = 'https://github.com/sanskarkarki';

/** The running thing. The nav sends people here rather than to a section of
 *  this page: a visitor who wants to know how it works is better served by the
 *  product than by prose about the product. */
const APP = 'https://www.instagram.com/_sannskar__/';

export const BRAND = {
  name: 'chat-memory',

  /** the mark in the header links straight here; there is nowhere else to go yet */
  repo: REPO,

  /** the deployed product */
  app: APP,

  /** the display line: two words around the star, and nothing else */
  headline: 'DEMO ✦ BUILD',

  /*
   * Every entry leaves the page. An href starting with http is rendered as an
   * external link by the header, so adding one here needs no other change; an
   * href starting with # still smooth-scrolls to that id on this page.
   */
  nav: [
    { label: 'Instagram', href: APP },
    { label: 'Architecture', href: REPO },
    { label: 'Get started', href: REPO },
  ],

  /** the two stacked cells at top right: the claim, then the way in */
  status: {
    claim: 'This is a demo build.',
    release: 'Open source, self-hosted',
    action: '→ Read the code',
  },

  social: [
    { label: 'GitHub', href: REPO },
    { label: 'IG', href: 'https://www.instagram.com/_sannskar__/' },
  ],

  /**
   * The terminal: the extraction pipeline talking to itself. It teaches the
   * product passively, which is more than a decorative typewriter earns.
   */
  terminal: [
    'Reading the conversation…',
    'Writing the episode, with its when and where…',
    'Distilling a durable fact…',
    'Searching for similar memories…',
    'Deciding: add, update, delete or leave alone…',
    'Linking the fact back to its episode…',
    'Rolling summary updated…',
    'Nothing deleted, only superseded.',
  ],

  /**
   * This is the only place on the page that explains what the thing is, so it
   * gets the room. Anyone who leaves after reading these four paragraphs should
   * be able to describe the product to someone else.
   */
  about: [
    'This is a demo build created to explore a different visual direction, layout, and interaction style. It is not a product, and it is not a service. It is a demonstration of what the project can do, and it is not intended to be used as a real assistant.',
    + 'The purpose of the build is to experiment with typography, motion, spacing, color, and responsive behavior while testing how different ideas come together in a complete web experience. '
    + 'Nothing here is intended to represent a finished product. It is a visual and technical experiment used to test concepts and demonstrate what can be built. '
    + 'The build is not intended to be used as a real assistant, and it is not a product or service. It is a demonstration of what the project can do, and it is not intended to be used as a real assistant.',
  ],

  /**
   * The specification grid. Two cells are deliberately left unclaimed so the
   * hatch behind the grid shows through; that gap is doing as much visual work
   * as the tiles.
   */
  grid: GRID,

  /**
   * The cards that fly out of the vanishing point. These are not decoration:
   * each one is an episode as the system would actually hold it, a thing that
   * happened with the time it happened at. A visitor understands the data model
   * in three seconds without reading a line of prose.
   */
  /*
   * `image` is a portrait file under public/episodes/. Leave it out and the
   * frame shows an empty plate instead: an honest "no photo yet" rather than a
   * stock face pretending to be someone's memory. Drop a file in and set the
   * name here and it appears with no other change.
   */
  episodes: [
    { caption: 'MONTY · GOA · JAN 2023', image: 'dog.jpg', w: 700, h: 1059 },
    { caption: 'THE VILLAGE ABOVE THE LAKE', image: 'village.jpg', w: 700, h: 931 },
    { caption: 'BLUE LAGOON · MAR 2023', image: 'lagoon.jpg', w: 700, h: 1043 },
    { caption: 'RODE THE RIDGE · SEP 2021', image: 'ridge.jpg', w: 700, h: 467 },
    { caption: 'KYOTO · APR 2024', image: 'pagoda.jpg', w: 700, h: 1050 },
    { caption: 'THE COVE · JUN 2023', image: 'cove.jpg', w: 700, h: 964 },
  ] as readonly { caption: string; image?: string; w: number; h: number }[],

  /**
   * Lying flat on the floor, receding to the vanishing point. Four lines, and
   * the order is the whole trick: the shear makes each one larger than the one
   * above it, so the sentence arrives from the far distance and the count lands
   * at your feet.
   */
  floor: ['THIS', 'IS', 'A', 'DEMO', 'BUILD'],

  /** The closing panel. The button asks; the disc behind it answers. */
  cta: {
    button: 'ASK',
    /*
     * Two words stacked in the SAME box and sliced through the middle: the top
     * half of one and the bottom half of the other. That is why they are stored
     * as cells rather than strings, and why the two lines have to be close in
     * width. Punctuation rides along with its neighbour in one cell so the cell
     * count stays honest; give an apostrophe its own cell and the halves stop
     * trading cleanly.
     */
    rope: {
      top: ['D', 'E', 'M', 'O'],
      bottom: ['B', 'U', 'I', 'L', 'D'],
    },
    address: 'https://github.com/sanskarkarki',
  },
} as const;
