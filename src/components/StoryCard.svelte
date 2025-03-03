<script>
  import { createEventDispatcher } from 'svelte';
  import { navigate } from 'svelte-routing';

  export let story;
  export let index;
  let isEditing = false;
  let title = story.title;
  let content = story.content;
  const dispatch = createEventDispatcher();

  function saveEdit() {
    dispatch('editStory', { title, content, date: story.date });
    isEditing = false;
  }

  function deleteStory() {
    dispatch('deleteStory');
  }

  function readStory() {
    navigate(`/story/${index}`);
  }
</script>

<div class="bg-white p-4 shadow rounded-md">
  {#if isEditing}
    <input type="text" bind:value={title} class="border p-2 w-full mb-2" placeholder="Story Title" />
    <textarea bind:value={content} class="border p-2 w-full mb-2 h-24" placeholder="Story Content"></textarea>
    <button on:click={saveEdit} class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
    <button on:click={() => (isEditing = false)} class="bg-gray-400 text-white px-4 py-2 rounded ml-2">Cancel</button>
  {:else}
    <h3 class="text-xl font-bold">{story.title}</h3>
    <p class="text-gray-700">
      {story.content.split(" ").slice(0, 20).join(" ")}{story.content.split(" ").length > 20 ? "..." : ""}
    </p>
    <p class="text-sm text-gray-500">{story.date}</p>

    <div class="mt-4">
      <button on:click={readStory} class="bg-purple-500 text-white px-4 py-2 rounded">Read</button>
      <button on:click={() => (isEditing = true)} class="bg-blue-500 text-white px-4 py-2 rounded ml-2">Edit</button>
      <button on:click={deleteStory} class="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
    </div>
  {/if}
</div>
