<template>
    <edit-add :d="d" />
</template>
<script >
import EditAdd from "@/utils/crud/editAdd";
import details from "@/cruds/groups";
import EditAddComponent from "@/utils/crud/editAdd.vue";
export default {
  components: {
    "edit-add":EditAddComponent,
  },
  computed: {
    d() {
      const d = new EditAdd(details);
      return d;
    },
  },
};
</script>