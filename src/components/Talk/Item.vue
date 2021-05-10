<template>
    <li>
        <div>
            <a href="">删除</a>
        </div>
        <p><span>{{comment.input}}说：</span></p>
        <p>{{comment.textarea}}</p>

    </li>
</template>

<script>
export default {
      name: 'item',
    //   props: ['comment']
    props: {
        comment: Object
    }
      

}
</script>

<style>

</style>