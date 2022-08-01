<template>
  <div class="py-12">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="search"
            :label="$t('search')"
            solo-inverted
            dense
            rounded
            hide-details
            clearable
            clear-icon="mdi-close-circle-outline"
          ></v-text-field>
          <v-treeview
            rounded
            :search="search"
            hoverable
            item-key="name"
            :items="groups"
          >
            <template v-slot:append="{ item }">
              <v-icon
                v-for="(action , index) in actions"
                class="mx-2"
                :key="index"
                @click.prevent="action.clickAction(item)"
              >
                {{action.icon}}
              </v-icon>
            </template>
          </v-treeview>
        </v-col>
        <v-col cols="6">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { bus } from "@/main";
import { groupsHierarchyResponse } from "@/models/group";
import { ListHierarchy } from "@/repositories/group";

export default {
  data() {
    return {
      search: "",
      actions: [
        {
          icon: "mdi-square-edit-outline",
          clickAction: (item: groupsHierarchyResponse) => {
            if (
              this.$route.name == "items-groups-edit" &&
              this.$route.params.id == item.groupCode.toString()
            ) {
              return;
            }
            bus.$emit("editAddFind", item.groupCode);
            this.$router.push({
              name: "items-groups-edit",
              params: { id: item.groupCode.toString() },
            });
          },
        },
        {
          icon: "mdi-trash-can-outline",
          clickAction: (item: groupsHierarchyResponse) => {
           console.log("delete")
          },
        },
        
      ],
      groups: [] as groupsHierarchyResponse[],
    };
  },
  methods: {
    getData() {
      ListHierarchy().then((res: groupsHierarchyResponse[]) => {
        if(res.length == 0 && this.$route.name == 'items-groups-edit') this.$router.push('items-groups')
        this.groups = res;
      });
    },
  },
  mounted() {
    this.getData();
    bus.$on("getGroupsTree", () => {
      this.getData();
    });
  },
};
</script>