import Vue from 'vue';
import "core-js/fn/object/assign";

import {
    populateAmenitiesAndPrices
} from './helpers';
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

import ImageCarousel from '../components/ImageCarousel.vue';
import ModalWindow from '../components/ModalWindow.vue';
import HeaderImage from '../components/HeaderImage.vue';

var app = new Vue({
    el: '#app',

    data: Object.assign(model, {
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
        },
        contracted: true,
    }),

    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        }
    },

    components: {
        ImageCarousel,
        ModalWindow,
        HeaderImage,
    }
});