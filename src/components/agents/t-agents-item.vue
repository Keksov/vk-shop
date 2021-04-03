<template>
    <div class="t-agents-item">
        <div class="t-agents__top">
            <div class="t-agents__top-link">
                {{ agent_data.vkid }}
            </div>
        </div>
        
        <div class="t-agents__middle">
            <div class="t-agents__middle-agent">
                <div class="t-agents__middle-ava"
                v-bind:style="{ backgroundImage: 'url(' + agent_data.vkav + ')' }"
                ></div>

                <div class="t-agents__middle-info">
                    <div class="t-agents__middle-name">
                        {{ agent_data.name }}
                    </div>
                    <div class="t-agents__middle-status">
                        {{ agent_data.status }}
                    </div>
                </div>
            </div>

            <div class="t-agents__contacts">
                <div class="t-agents__contacts-links">
                    <template v-if="agent_data.contacts.vk">
                        <a href="agent_data.contacts.vk" 
                        class="t-agents__btn t-agents__btn-vk">
                        <img src="../../assets/icons/vk.png" alt="vk">
                    </a>
                    </template>
                    <template v-if="agent_data.contacts.vk">
                        <a href="agent_data.contacts.wa" 
                            class="t-agents__btn t-agents__btn-wa">
                            <img src="../../assets/icons/wa.png" alt="vk">
                        </a>
                    </template>
                    <template v-if="agent_data.contacts.vi">
                        <a href="agent_data.contacts.vi" 
                            class="t-agents__btn t-agents__btn-viber">
                            <img src="../../assets/icons/viber.png" alt="vk">
                        </a>
                    </template>
                    <template v-if="agent_data.contacts.ph">
                        <a href="tel:agent_data.contacts.ph" 
                            class="t-agents__btn t-agents__btn-phone">
                            <img src="../../assets/icons/phone.png" alt="vk">
                        </a>
                    </template>
                </div>
                <div class="t-agents__contacts-favorite">
                    <button class="t-card-actions__favorites">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2204 22.7806L11.8946 22.6638L11.5662 22.7735C8.6571 23.7456 6.66248 23.981 5.30377 23.78C4.0148 23.5892 3.28167 23.0071 2.8052 22.1709C2.29005 21.2667 2.03965 19.9984 1.93938 18.4075C1.86585 17.2408 1.87579 15.9942 1.88623 14.6839C1.89 14.2109 1.89384 13.7296 1.89384 13.2408C1.89384 11.5633 2.13235 10.3897 2.53635 9.51246C2.9327 8.65184 3.51951 8.00856 4.339 7.43782C5.18086 6.85152 6.24898 6.35403 7.60383 5.78646C7.97107 5.63262 8.3592 5.4737 8.76593 5.30716C9.71325 4.91928 10.7615 4.49006 11.8821 3.98734C13.0412 4.51014 14.1176 4.95274 15.0848 5.3504C15.4854 5.5151 15.8672 5.67209 16.2284 5.82388C17.5922 6.39699 18.6543 6.89311 19.4857 7.47659C20.293 8.04317 20.8659 8.68146 21.2521 9.54282C21.6469 10.4233 21.8775 11.6061 21.8775 13.3055C21.8775 13.5355 21.8778 13.7645 21.8782 13.9922C21.8808 15.5527 21.8832 17.0528 21.7639 18.4267C21.6264 20.0096 21.3352 21.2886 20.7896 22.2034C20.2791 23.0592 19.5213 23.643 18.258 23.8276C16.929 24.0218 15.0005 23.7767 12.2204 22.7806Z" stroke="#555555" stroke-width="2"/>
                        <circle cx="23.5555" cy="1.66663" r="1" fill="#FF0000"/>
                        </svg>

                </button>
                </div>
            </div>
        </div>

        <div class="t-agents__social">
            <div class="t-agents__social-item">
                <div class="t-agents__social-icon">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="7.6433" cy="10.5" rx="4.58599" ry="4.5" fill="white"/>
                    <path d="M11.7293 10.5C11.7293 12.7003 9.90889 14.5 7.6433 14.5C5.37771 14.5 3.55731 12.7003 3.55731 10.5C3.55731 8.29974 5.37771 6.5 7.6433 6.5C9.90889 6.5 11.7293 8.29974 11.7293 10.5Z" stroke="#555555" stroke-opacity="0.6"/>
                    <path d="M14.7504 12.7601C14.7504 13.2918 14.7564 13.7614 14.7618 14.1792C14.7715 14.9345 14.7791 15.5201 14.7447 15.9962C14.6919 16.7277 14.5477 16.9931 14.3309 17.145C14.0567 17.3371 13.5383 17.4502 12.4501 17.4855C11.791 17.5069 10.9822 17.5006 9.97237 17.4927C9.35469 17.4879 8.66178 17.4825 7.88187 17.4825C7.32646 17.4825 6.81212 17.4843 6.33539 17.486C4.9573 17.4907 3.89338 17.4944 3.05943 17.4508C1.91393 17.3909 1.34775 17.2428 1.03723 17.0017C0.765733 16.7908 0.600157 16.432 0.535362 15.5987C0.490589 15.023 0.497575 14.3075 0.506595 13.3839C0.510695 12.964 0.515216 12.501 0.515484 11.9886C0.515645 11.6813 0.514206 11.4011 0.512884 11.1435C0.508481 10.2858 0.505369 9.67947 0.566902 9.16184C0.641752 8.53218 0.811231 8.06211 1.22317 7.48164C1.65405 6.87447 2.34322 6.15573 3.47779 5.03902C3.80448 4.71747 4.16667 4.36425 4.5675 3.97334C5.46612 3.09697 6.55899 2.03116 7.88164 0.708076C8.36617 1.19386 8.81711 1.64462 9.2369 2.06425C10.473 3.29989 11.4391 4.26555 12.1974 5.06052C13.2787 6.19393 13.8996 6.94201 14.2649 7.58953C14.616 8.21187 14.7397 8.75725 14.7749 9.51363C14.7961 9.96845 14.7854 10.4666 14.7722 11.0857C14.762 11.5609 14.7504 12.1073 14.7504 12.7601Z" stroke="#555555" stroke-opacity="0.6"/>
                    </svg>
                </div>
                <div class="t-agents__social-place">
                    город <span class="t-color__black">{{ agent_data.location}}</span>
                </div>
            </div>

            <div class="t-agents__social-item">
                <div class="t-agents__social-icon">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="7.64297" cy="4.5" rx="4.58584" ry="4.5" fill="white"/>
                    <path d="M11.7288 4.5C11.7288 6.70027 9.90847 8.5 7.64297 8.5C5.37747 8.5 3.55713 6.70027 3.55713 4.5C3.55713 2.29973 5.37747 0.5 7.64297 0.5C9.90847 0.5 11.7288 2.29973 11.7288 4.5Z" stroke="#555555" stroke-opacity="0.6"/>
                    <path d="M7.9637 17.0614L7.88021 17.0457L7.79622 17.0585C5.73989 17.3709 4.25273 17.4646 3.17841 17.3954C2.09913 17.3259 1.49347 17.0953 1.1426 16.8144C0.808148 16.5466 0.640676 16.181 0.561798 15.6689C0.494993 15.2352 0.498119 14.7525 0.501764 14.1898C0.502626 14.0566 0.503518 13.919 0.503518 13.7764C0.503518 13.3704 0.637767 13.0621 0.906111 12.7892C1.19146 12.499 1.64299 12.2354 2.29632 11.9817C3.33027 11.5803 4.72877 11.2528 6.47279 10.8443C6.9171 10.7403 7.38384 10.631 7.87268 10.5139C7.99846 10.5433 8.1228 10.5724 8.2457 10.6011C10.2528 11.0703 11.8729 11.449 13.0252 11.9684C13.6401 12.2455 14.0772 12.5444 14.3596 12.8814C14.6314 13.2059 14.7797 13.5888 14.7797 14.0885C14.7797 14.2433 14.7814 14.3926 14.783 14.5372C14.7883 15.0012 14.793 15.4162 14.7395 15.8058C14.6723 16.2947 14.5214 16.6561 14.2158 16.92C13.9005 17.1924 13.3466 17.4249 12.3372 17.485C11.3301 17.5449 9.9235 17.4299 7.9637 17.0614Z" stroke="#555555" stroke-opacity="0.6"/>
                    </svg>
                </div>
                <div class="t-agents__social-location">
                    <span class="t-color__black">{{ agent_data.counters.friends}}</span> друзей
                </div>
            </div>

            <div class="t-agents__social-item">
                <div class="t-agents__social-icon">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.72067 15C1.75464 15 1.78861 15 1.82258 15" stroke="#555555" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.72067 8C4.12273 10.357 6.5248 12.7141 8.92686 15.0711" stroke="#555555" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.72067 1C6.47675 5.66691 11.2328 10.3338 15.9889 15.0007" stroke="#555555" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="t-agents__social-place">
                    <span class="t-color__black">{{ agent_data.counters.subscribers}}</span> подписчиков
                </div>
            </div>

        </div>
        
        <div class="t-agents__insta">
            <div class="t-agents__insta-icon">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15.3057" height="15" rx="3.5" stroke="#555555" stroke-opacity="0.6"/>
                <path d="M11.7293 8C11.7293 9.92412 10.137 11.5 8.15285 11.5C6.16868 11.5 4.57642 9.92412 4.57642 8C4.57642 6.07588 6.16868 4.5 8.15285 4.5C10.137 4.5 11.7293 6.07588 11.7293 8Z" stroke="#555555" stroke-opacity="0.6"/>
                <ellipse cx="12.2293" cy="4" rx="1.01911" ry="1" fill="#FF0000"/>
                </svg>
            </div>
            <div class="t-agents__insta-summ">
               <span class="t-color__black"> {{ agent_data.items.length }} </span> фотографий
            </div>

        </div>
        <div class="t-agents__items">
            <img :src="item.img" alt="" v-for="item in agent_data.items" :key="item.muid">
        </div>

    </div>
</template>

<script>
export default {
    name: 't-agents-item',
    props: {
        agent_data:{
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>