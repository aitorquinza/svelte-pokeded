<script context="module">
  export async function load({page}) {
    const id = page.params.id
    console.log(id)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url, {mode: 'cors'})
    console.log(res)
    const pokeman = await res.json()
    return {
      props: {pokeman}
    }

  }
</script>
<script>
  export let pokeman
</script>
<div class="flex flex-col items-center">
  <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
  <p>Type: <strong>{pokeman.types[0].type.name}</strong> | Height: <strong>{pokeman.height}</strong>
    | Weight <strong>{pokeman.weight}</strong>
  </p>
  <img class="h-40 w-40" src="{pokeman.sprites['front_default']}" alt={pokeman.name} />
</div>
