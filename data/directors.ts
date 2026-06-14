export type Team =
  | "exec"
  | "cubstart"
  | "design"
  | "finance"
  | "hei"
  | "logistics"
  | "marketing"
  | "sponsorship"
  | "tech";

export type Role = "lead" | "director";

export interface Position {
  team: Team;
  type?: Role;
}

export interface Director {
  firstName: string;
  lastName: string;
  image: string;
  linkedin: string;
  positions: Position[];
}

export const teamLabels: Record<Team, string> = {
  exec: "Executive Director",
  cubstart: "Cubstart",
  design: "Design",
  finance: "Finance",
  hei: "HEI",
  logistics: "Logistics",
  marketing: "Marketing",
  sponsorship: "Sponsorship",
  tech: "Tech",
};

export const roleLabels: Record<Role, string> = {
  lead: "Lead",
  director: "Director",
};

export const teamOrder: Team[] = [
  "exec",
  "cubstart",
  "design",
  "finance",
  "hei",
  "logistics",
  "marketing",
  "sponsorship",
  "tech",
];

export const directors: Director[] = [
  {
    firstName: "Abby",
    lastName: "Li",
    image: "/images/directors/abby.jpg",
    linkedin: "https://www.linkedin.com/in/abby-li-70538416b/",
    positions: [{ team: "cubstart", type: "director" }],
  },
  {
    firstName: "Allison",
    lastName: "Wang",
    image: "/images/directors/allison.jpg",
    linkedin: "https://www.linkedin.com/in/allison-wang0/",
    positions: [{ team: "exec" }],
  },
  {
    firstName: "Carl",
    lastName: "Djapardi",
    image: "/images/directors/carl.jpg",
    linkedin: "https://www.linkedin.com/in/carl-djapardi/",
    positions: [{ team: "tech", type: "director" }],
  },
  {
    firstName: "Charlie",
    lastName: "Huang",
    image: "/images/directors/charlie.jpg",
    linkedin: "https://www.linkedin.com/in/huangzcharlie/",
    positions: [{ team: "exec" }],
  },
  {
    firstName: "Christopher",
    lastName: "Blu Lopez",
    image: "/images/directors/chris.jpg",
    linkedin: "https://www.linkedin.com/in/christopher-blu-lopez/",
    positions: [
      { team: "marketing", type: "director" },
      { team: "hei", type: "director" },
    ],
  },
  {
    firstName: "Christy",
    lastName: "Huang",
    image: "/images/directors/christy.jpg",
    linkedin: "https://www.linkedin.com/in/christyhuanggg/",
    positions: [{ team: "finance", type: "lead" }],
  },
  {
    firstName: "Collin",
    lastName: "Hargreaves",
    image: "/images/directors/collin.jpg",
    linkedin: "https://www.linkedin.com/in/collinj-hargreaves/",
    positions: [{ team: "sponsorship", type: "director" }],
  },
  {
    firstName: "Edward",
    lastName: "Kim",
    image: "/images/directors/edward.jpg",
    linkedin: "https://www.linkedin.com/in/eedwardkim/",
    positions: [{ team: "marketing", type: "director" }],
  },
  {
    firstName: "Eric",
    lastName: "Cao",
    image: "/images/directors/eric.jpg",
    linkedin: "https://www.linkedin.com/in/eric-cao-8709752b2/",
    positions: [{ team: "tech", type: "director" }],
  },
  {
    firstName: "Gary",
    lastName: "Sun",
    image: "/images/directors/gary.jpg",
    linkedin: "https://www.linkedin.com/in/sun-gary/",
    positions: [{ team: "tech", type: "lead" }],
  },
  {
    firstName: "Jane",
    lastName: "Dong",
    image: "/images/directors/jane.jpg",
    linkedin: "https://www.linkedin.com/in/jane-d-3ba4aa221/",
    positions: [{ team: "sponsorship", type: "director" }],
  },
  {
    firstName: "Jasmine",
    lastName: "Lee",
    image: "/images/directors/jasmine.jpg",
    linkedin: "https://www.linkedin.com/in/jasmineclee/",
    positions: [{ team: "design", type: "lead" }],
  },
  {
    firstName: "Javin",
    lastName: "Ku",
    image: "/images/directors/javin.jpeg",
    linkedin: "https://www.linkedin.com/in/javin-ku-059590299/",
    positions: [{ team: "marketing", type: "director" }],
  },
  {
    firstName: "Jay",
    lastName: "Chong",
    image: "/images/directors/jay.jpg",
    linkedin: "https://www.linkedin.com/in/jaeyoon-chong/",
    positions: [{ team: "logistics", type: "director" }],
  },
  {
    firstName: "Jeffrey",
    lastName: "Gong",
    image: "/images/directors/jeffrey.jpg",
    linkedin: "https://www.linkedin.com/in/jeffreygongla/",
    positions: [{ team: "finance", type: "director" }],
  },
  {
    firstName: "Jessenia",
    lastName: "Chan",
    image: "/images/directors/jessenia.jpg",
    linkedin: "https://www.linkedin.com/in/jesseniachan/",
    positions: [{ team: "sponsorship", type: "lead" }],
  },
  {
    firstName: "Jessica",
    lastName: "Chiu",
    image: "/images/directors/jessica.jpg",
    linkedin: "https://www.linkedin.com/in/jessicaclairechiu/",
    positions: [{ team: "cubstart", type: "director" }],
  },
  {
    firstName: "Justin",
    lastName: "Wong",
    image: "/images/directors/justinw.jpg",
    linkedin: "https://www.linkedin.com/in/jwonghelloworld/",
    positions: [{ team: "cubstart", type: "lead" }],
  },
  {
    firstName: "Justin",
    lastName: "Zhang",
    image: "/images/directors/justinz.jpg",
    linkedin: "https://www.linkedin.com/in/justin-zhang-ab4a96220/",
    positions: [{ team: "tech", type: "director" }],
  },
  {
    firstName: "Kaden",
    lastName: "Huang",
    image: "/images/directors/kaden.jpg",
    linkedin: "https://www.linkedin.com/in/kadenhuang/",
    positions: [
      { team: "marketing", type: "director" },
      { team: "sponsorship", type: "director" },
    ],
  },
  {
    firstName: "Kandra",
    lastName: "Chau",
    image: "/images/directors/kandra.jpg",
    linkedin: "https://www.linkedin.com/in/kandrachau/",
    positions: [{ team: "marketing", type: "lead" }],
  },
  {
    firstName: "Kelly",
    lastName: "Yang",
    image: "/images/directors/kelly.jpg",
    linkedin: "https://www.linkedin.com/in/kelly-yang06/",
    positions: [{ team: "tech", type: "director" }],
  },
  {
    firstName: "Kiana",
    lastName: "Yassini",
    image: "/images/directors/kiana.jpg",
    linkedin: "https://www.linkedin.com/in/kiana-y-97778b302/",
    positions: [{ team: "hei", type: "lead" }],
  },
  {
    firstName: "Kylie",
    lastName: "Marcisz",
    image: "/images/directors/kylie.jpg",
    linkedin: "https://www.linkedin.com/in/kylie-marcisz-ucb29/",
    positions: [{ team: "logistics", type: "director" }],
  },
  {
    firstName: "Lanna",
    lastName: "Xiao",
    image: "/images/directors/lanna.jpg",
    linkedin: "https://www.linkedin.com/in/lanna-xiao-b38a3331b/",
    positions: [{ team: "design", type: "director" }],
  },
  {
    firstName: "Mauricio",
    lastName: "Yeverino Penunuri",
    image: "/images/directors/mauricio.jpg",
    linkedin: "https://www.linkedin.com/in/myeverino2003/",
    positions: [{ team: "cubstart", type: "director" }],
  },
  {
    firstName: "Mei",
    lastName: "Cibulka",
    image: "/images/directors/mei.jpg",
    linkedin: "https://www.linkedin.com/in/amelie-cibulka/",
    positions: [{ team: "cubstart", type: "lead" }],
  },
  {
    firstName: "Nastasia",
    lastName: "Golembusch",
    image: "/images/directors/nastasia.jpg",
    linkedin: "https://www.linkedin.com/in/nastasia-golembusch/",
    positions: [{ team: "hei", type: "director" }],
  },
  {
    firstName: "Nathan",
    lastName: "Rhee",
    image: "/images/directors/nathan.jpg",
    linkedin: "https://www.linkedin.com/in/nathan-rhee-016103234/",
    positions: [{ team: "sponsorship", type: "lead" }],
  },
  {
    firstName: "Neha",
    lastName: "Gopal",
    image: "/images/directors/neha.jpg",
    linkedin: "https://www.linkedin.com/in/neha-gopal-11928a32a/",
    positions: [{ team: "hei", type: "lead" }],
  },
  {
    firstName: "Nicole",
    lastName: "Lee",
    image: "/images/directors/nicolesoph.jpg",
    linkedin: "https://www.linkedin.com/in/nicolehylee/",
    positions: [{ team: "sponsorship", type: "director" }],
  },
  {
    firstName: "Nicole",
    lastName: "Lee",
    image: "/images/directors/nicoleleejr.jpg",
    linkedin: "https://www.linkedin.com/in/nicolelee7887/",
    positions: [{ team: "tech", type: "lead" }],
  },
  {
    firstName: "Paarin",
    lastName: "Rastogi",
    image: "/images/directors/paarin.jpg",
    linkedin: "https://www.linkedin.com/in/paarin-rastogi/",
    positions: [{ team: "finance", type: "director" }],
  },
  {
    firstName: "Rodin",
    lastName: "Luo",
    image: "/images/directors/rodin.jpg",
    linkedin: "https://www.linkedin.com/in/dan-luo-4109a9383/",
    positions: [{ team: "marketing", type: "director" }],
  },
  {
    firstName: "Rosy",
    lastName: "Sun",
    image: "/images/directors/rosy.jpg",
    linkedin: "https://www.linkedin.com/in/rosy-s-722184375/",
    positions: [{ team: "finance", type: "director" }],
  },
  {
    firstName: "Shahene",
    lastName: "Chaouachi",
    image: "/images/directors/shahene.jpeg",
    linkedin: "https://www.linkedin.com/in/shahene-chaouachi/",
    positions: [{ team: "sponsorship", type: "director" }],
  },
  {
    firstName: "Shreya",
    lastName: "Korlipara",
    image: "/images/directors/shreya.jpg",
    linkedin: "https://www.linkedin.com/in/shreya-korlipara/",
    positions: [{ team: "hei", type: "director" }],
  },
  {
    firstName: "Sophia",
    lastName: "Choi",
    image: "/images/directors/sophia.jpg",
    linkedin: "https://www.linkedin.com/in/sophiaechoi/",
    positions: [{ team: "logistics", type: "director" }],
  },
  {
    firstName: "Steven",
    lastName: "Zhang",
    image: "/images/directors/steven.jpg",
    linkedin: "https://www.linkedin.com/in/steven-t-zhang/",
    positions: [{ team: "logistics", type: "director" }],
  },
  {
    firstName: "Sumin",
    lastName: "Cho",
    image: "/images/directors/sumin.jpg",
    linkedin: "https://www.linkedin.com/in/sumin-cho1/",
    positions: [{ team: "logistics", type: "lead" }],
  },
  {
    firstName: "Tanisha",
    lastName: "Saxena",
    image: "/images/directors/tanisha.jpg",
    linkedin: "https://www.linkedin.com/in/tanisha03/",
    positions: [{ team: "logistics", type: "director" }],
  },
  {
    firstName: "Trinity",
    lastName: "Nguyen",
    image: "/images/directors/trinity.jpg",
    linkedin: "https://www.linkedin.com/in/trinity-nguyen-063334361/",
    positions: [{ team: "design", type: "director" }],
  },
  {
    firstName: "Victor",
    lastName: "Hui",
    image: "/images/directors/victorhui.jpg",
    linkedin: "https://www.linkedin.com/in/victor-hui-195606240/",
    positions: [{ team: "sponsorship", type: "director" }],
  },
  {
    firstName: "Victor",
    lastName: "Pham",
    image: "/images/directors/victorp.jpg",
    linkedin: "https://www.linkedin.com/in/victpham/",
    positions: [{ team: "design", type: "lead" }],
  },
  {
    firstName: "Wallace",
    lastName: "Tang",
    image: "/images/directors/wallace.jpg",
    linkedin: "https://www.linkedin.com/in/wallacelhtang/",
    positions: [{ team: "logistics", type: "lead" }],
  },
  {
    firstName: "Yutong",
    lastName: "Cui",
    image: "/images/directors/yutong.jpg",
    linkedin: "https://www.linkedin.com/in/yutong-cui212/",
    positions: [{ team: "tech", type: "director" }],
  },
];
