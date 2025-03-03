<script>
  let menuOpen = false;
</script>

<header class="bg-gray-900 text-white">
  <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold">StorySphere</a>
    <button class="lg:hidden" on:click={() => menuOpen = !menuOpen}>
      ☰
    </button>
    <ul class="hidden lg:flex space-x-6">
      <li><a href="/" class="hover:text-gray-300">Home</a></li>
      <li><a href="/" class="hover:text-gray-300">All Stories</a></li>
      <li><a href="/" class="hover:text-gray-300">Write Story</a></li>
    </ul>
  </nav>
</header>
