import { html } from "../lib.js";

const createTemplate = (onSubmit) => html``;

export function createView(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const offer = {
      title,
      imageUrl,
      category,
      description,
      requirements,
      salary,
    };

    if (offer.title == "") {
      return alert("All fields are required!");
    }

    await meme;
    event.target.reset();
    ctx.page.redirect("/dashboard");
  }
}
