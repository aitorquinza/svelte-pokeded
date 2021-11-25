<script context="module">
    export async function load({page}) {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
        const res = await fetch(url);
        const data = await res.json()
        const loadedPokemon = data.results.map((data, index) => {
            return {
                name: data.name,
                id: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            };
        })
        return {props: { pokemon:loadedPokemon }}
    }
</script>
<script>

    export let pokemon;
    import PokemanCard from "../components/pokemanCard.svelte";

    let searchTerm = ''
    let filteredPokemon = []

    $: {
        if (searchTerm) {
            filteredPokemon = pokemon.filter(pok => pok.name.includes(searchTerm.toLowerCase()))
        } else {
            filteredPokemon = [... pokemon]
        }
    }
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Welcome to pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 bprder-gray-200 mb-6" type="text" bind:value={searchTerm} placeholder="Search Pokemon">

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
    {#each filteredPokemon as poke}
        <PokemanCard pokeman={poke} />
    {/each}
</div>
