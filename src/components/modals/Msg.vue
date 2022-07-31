<template>
  <div class="text-center">
    <v-dialog
      v-model="active"
      width="500"
    >
     
      <v-card>
        <v-card-title class="text-h5">
          {{$t('send_msg')}}
        </v-card-title>

        <v-card-text>
            <v-form >
                <v-row>
                   
                    <v-col :cols="12">
                       <v-textarea
                      outlined
                      v-model="msg"

                      :label="$t('msg')"
                    ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-btn  color="primary" class="app-btn" @click.prevent="submit">{{$t('submit')}}</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
// import { CreateMsg } from '@/repositories/chat'
 import {msgRequest} from '@/models/chat'
 import {bus} from '@/main'
import {mapGetters} from 'vuex'

  export default {
    data(){
      return {
        msg : ""
      }
    },
    methods:{
      submit(){
        let request :msgRequest = {
          ToId : this.id,
          Msg : this.msg
        }
        // CreateMsg(request).then(res => {
        //   this.$store.commit("ui/respondModal" , {status : false , id : 0})
        //   bus.$emit('getTableData')
        // })
      }
    },
    computed:{
        ...mapGetters({
            active : 'ui/respondModalStatus',
            id : 'ui/respondModalUserId'
        })
    }
  }
</script>