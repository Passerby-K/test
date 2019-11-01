export default {
    set_common_data: (state, data) => {
        state.common_data.type = data.type;
        state.common_data.cardno = data.cardno;
        state.common_data.cardno_start = data.cardno_start;
        state.common_data.cardno_end = data.cardno_end;
    },
    set_refund_List: (state, data) => {
        state.common_data.refundList = data
    },
    change_print_state:(state,data)=>{
        state.common_data.isPrint = data;
    },
    change_boatInform:(state,data)=>{
        state.common_data.boatInform = data;
    }
}
