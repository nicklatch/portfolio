<div class="heading-frame">
  <h2 contenteditable="true">YOU CAN<br />EDIT ME, JUST TYPE</h2>
</div>

<style>
  .heading-frame {
    display: grid;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    grid-template-columns: max-content auto;
    grid-template-rows: auto max-content;
    background: #333
      url(https://images.unsplash.com/photo-1497406703182-f805b8fbba89?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7598c4ba7994f83dab58ae34f1abd023&auto=format&fit=crop&w=1584&q=80)
      center;
    background-size: cover;
    color: white;
    width: 400px;
    height: 300px;
    padding: 2rem;
  }

  .heading-frame:before,
  .heading-frame:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid white;
  }

  .heading-frame:before {
    grid-row: 1 / 2;
    border-right: none;
    border-bottom: none;
  }
  .heading-frame:after {
    grid-row: 1 / span 2;
    border-left: none;
  }
  h2 {
    margin: 1rem 1rem -0.5rem 0;
    font-family: 'Pragati Narrow', sans-serif;
    font-size: 2rem;
    max-width: 100%;
  }
</style>
