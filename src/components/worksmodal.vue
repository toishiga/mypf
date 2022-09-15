<template lang="pug">
  transition(name="modal" appear)
    article.c-modal.c-modal__overlay(@click.self="$emit('modalclose')")
      .c-modal__window#c-modal__window
        .c-modal__content
          slot
</template>

