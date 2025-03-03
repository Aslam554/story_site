<script>
    import { navigate } from 'svelte-routing';
    export let stories;
    export let params;
  
    let story = stories[params.id];
  
    if (!story) {
      navigate('/');
    }
  </script>
  
  <section class="max-w-3xl mx-auto py-6">
    <button on:click={() => navigate('/')} class="bg-gray-400 text-white px-4 py-2 rounded mb-4">Back</button>
    <div class="bg-white p-6 shadow rounded-md">
      <h1 class="text-3xl font-bold">{story.title}</h1>
      <p class="text-gray-500">{story.date}</p>
      <p class="mt-4 text-gray-700">{story.content}</p>
    </div>
  </section>
  