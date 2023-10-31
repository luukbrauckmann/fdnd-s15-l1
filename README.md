<h1>
  <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/luukbrauckmann/sprint-15-l1/assets/47314813/db747413-fa0f-4a0e-b496-da812e118546">
      <img alt="Commentary Source" src="https://github.com/luukbrauckmann/sprint-15-l1/assets/47314813/2e85c910-95bd-444c-8e65-caffbb6b2dc0">
    </picture>
</h1>

<h2 id="contents">📦 Contents</h2>

1. [Description](#description)
2. [Usage](#usage)
3. [Characteristics](#characteristics)
4. [Installation](#installation)
5. [Sources](#sources)
6. [Licenses](#licenses)

<h2 id="description">ℹ️ Description</h2>

Commentary Tool is a website where commentators can commentate on 🥏 matches with a real-time statsboard. Statistics keepers can add/edit stats during a match via a page that is specifcally designed to give the ability to do it as fast as possible. Users in general can sign-up and they can create/edit their player or team profile.

<h2 id="usage">🖥️ Usage</h2>

This website is used by the commentators of Ulti.TV. They can add & edit tournaments, matches, teams & players. 

<h2 id="characteristics">✨ Characteristics</h2>

This project is build in Astro. Astro is configured to be able to run Svelte components to enable client side JavaScript. Texts & images is fetched from DatoCMS & data is stored in Supabase. DatoCMS uses GraphQL queries while Supabase uses it's own REST API. I would like to Supabase to run on GraphQL too in the future to have more consistency. The project runs on Bun. Bun is a new JavaScript runtime which claims to be 4 times faster than NodeJS.

<h2 id="installation">📥 Installation</h2>

Do you want to start this project locally? Then follow the next steps. NB! Bun must be installed to run bun commands. In the sources section there is a link to the Bun website

1. Open your terminal. Make sure you are in the path of the project.
```bash
path_to_the_project/fdnd-sprint-15-l1 %
```

3. Before you can start the application you must install all modules.
```bash
bun install
```

3. When the installation is complete you can start the application with the following command.
```bash
bun run dev

# Or when you want to open the browser directly with the correct URL.
bun run dev --open
```


<h2 id="sources">🌍 Sources</h2>

- [Instructions (Dutch)](docs/INSTRUCTIONS.md)
- [Astro](https://astro.build/)
- [DatoCMS](https://www.datocms.com/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)
- [Bun](https://bun.sh/)

<h2 id="licenses">🪪 Licenses</h2>

This project is licensed under the terms of the [MIT license](./LICENSE).
