<template lang="pug">
  ul.c-navlink
    li.c-navlink__item
      router-link(:to={name: 'Home'} exact) Home 
    li.c-navlink__item
      router-link(:to={name: 'Works'} ) Works
    li.c-navlink__item
      router-link(:to={name: 'About'} ) About
    li.c-navlink__item
      router-link(:to={name: 'Contact'} ) Contact
</template>
