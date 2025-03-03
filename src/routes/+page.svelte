<script>
  import { onMount } from 'svelte';
  import { Router, Route } from 'svelte-routing';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Home from '../pages/Home.svelte';
  import StoryPage from '../pages/StoryPage.svelte';

  let stories = [];

  onMount(() => {
    stories = JSON.parse(localStorage.getItem('stories')) || [];
  });

  function addStory(newStory) {
    stories = [...stories, newStory];
    localStorage.setItem('stories', JSON.stringify(stories));
  }

  function editStory(index, updatedStory) {
    stories[index] = updatedStory;
    localStorage.setItem('stories', JSON.stringify(stories));
    stories = [...stories];
  }

  function deleteStory(index) {
    stories.splice(index, 1);
    localStorage.setItem('stories', JSON.stringify(stories));
    stories = [...stories];
  }
</script>

<main class="bg-gray-100 min-h-screen transition-all duration-500 ease-in-out">
  <Navbar />

  <Router>
    <Route path="/" let:params>
      <div class="animate-fadeIn">
        <Home {stories} on:storyAdded={addStory} on:editStory={editStory} on:deleteStory={deleteStory} />
      </div>
    </Route>
    <Route path="story/:id" let:params>
      <div class="animate-slideIn">
        <StoryPage {stories} {params} />
      </div>
    </Route>
  </Router>

  <Footer />
</main>
