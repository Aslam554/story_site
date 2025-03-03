<script>
    import { createEventDispatcher } from 'svelte';
    import WriteStory from '../components/WriteStory.svelte';
    import StoryCard from '../components/StoryCard.svelte';
  
    export let stories = [];
    const dispatch = createEventDispatcher();
  
    function addStory(event) {
      dispatch('storyAdded', event.detail);
    }
  
    function editStory(index, event) {
      dispatch('editStory', { index, story: event.detail });
    }
  
    function deleteStory(index) {
      dispatch('deleteStory', index);
    }
  </script>
  
  <section class="text-center py-6">
    <WriteStory on:storyAdded={addStory} />
  </section>
  
  <section class="max-w-6xl mx-auto py-6">
    <h2 class="text-3xl font-bold text-center mb-6">Latest Stories</h2>
    {#if stories.length > 0}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each stories as story, index}
          <StoryCard 
            {story} 
            {index}
            on:editStory={(e) => editStory(index, e)}
            on:deleteStory={() => deleteStory(index)}
          />
        {/each}
      </div>
    {:else}
      <p class="text-center text-gray-500">No stories yet. Be the first to write one!</p>
    {/if}
  </section>
  