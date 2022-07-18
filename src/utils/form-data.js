// import Vue from 'vue'
import Vuex from 'vuex'
// Vue.use(Vx)ue

const getDefaultState = () => {
    return {
      items: [],
      status: "empty",
    };
};
const state = getDefaultState();
export default new Vuex.Store(
    {
        state: {
            rama: "",
            provincia: "",
            alumno: "",
            modalidad: "",
            horario: "",
            tarifa: "",
            nombre: "",
            dni: "",
            movil: Number,
            email: "",
            comunidad: "",
            direccion: "",
            localidad: "",
            provincia_dir: "",
            cp: Number,
            tarjeta: "",
            recomendado: "",
        },
        mutations: {
            setRama(state, value) {
                state.rama = value
            },
            setProvincia(state, value) {
                state.provincia = value
            },
            setAlumno(state, value) {
                state.alumno = value
            },
            setModalidad(state, value) {
                state.modalidad = value
            },
            setHorario(state, value) {
                state.horario = value
            },
            setTarifa(state, value) {
                state.tarifa = value
            },
            setNombre(state, value) {
                state.nombre = value
            },
            setDni(state, value) {
                state.dni = value
            },
            setMovil(state, value) {
                state.movil = value
            },
            setEmail(state, value) {
                state.email = value
            },
            setComunidad(state, value) {
                state.comunidad = value
            },
            setDireccion(state, value) {
                state.direccion = value
            },
            setLocalidad(state, value) {
                state.localidad = value
            },
            setProvincia_dir(state, value) {
                state.provincia_dir = value
            },
            setCp(state, value) {
                state.cp = value
            },
            setTarjeta(state, value) {
                state.tarjeta = value
            },
            setRecomendado(state, value) {
                state.recomendado = value
            }
        }
    }
)
export function RESET_STATE (state) {
    Object.assign(state, getDefaultState)
}