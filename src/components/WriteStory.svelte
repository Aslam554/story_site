<script>
    let isOpen = false;
    let title = "";
    let imageUrl = "";
    let content = "";
  
    function submitStory() {
      if (!title || !content || !imageUrl) {
        alert("Title, image, and content are required!");
        return;
      }
  
      // Get existing stories from localStorage
      let stories = JSON.parse(localStorage.getItem("stories")) || [];
  
      // Create new story object
      const newStory = { title, imageUrl, content, date: new Date().toLocaleDateString() };
  
      // Add new story to localStorage
      stories.unshift(newStory);
      localStorage.setItem("stories", JSON.stringify(stories));
  
      // Store the last written story separately
      localStorage.setItem("lastStory", JSON.stringify(newStory));
  
      alert("Story submitted successfully!");
  
      // Reset form and close modal
      title = "";
      imageUrl = "";
      content = "";
      isOpen = false;
    }
  </script>
  
  <!-- Button to Open the Modal -->
  <button 
    on:click={() => isOpen = true}
    class="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
  >
    Write a Story
  </button>
  
  <!-- Story Writing Modal -->
  {#if isOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px]">
        <h2 class="text-2xl font-bold mb-4">Write Your Story</h2>
  
        <input type="text" bind:value={title} placeholder="Story Title" 
          class="w-full p-2 border rounded mb-2" />
  
        <input type="text" bind:value={imageUrl} placeholder="Image URL" 
          class="w-full p-2 border rounded mb-2" />
  
        <textarea bind:value={content} rows="5" placeholder="Story Content..." 
          class="w-full p-2 border rounded mb-4"></textarea>
  
        <div class="flex justify-between">
          <button on:click={submitStory} class="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
          <button on:click={() => isOpen = false} class="bg-red-500 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  {/if}
  