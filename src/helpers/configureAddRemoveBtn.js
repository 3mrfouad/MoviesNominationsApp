export const isDisabled = (config, item) => {
    if (config.profile === 'add') return item?.nominated;
}

export const styleDisabledBtn = (config, item) => {

    if (config.profile === 'add' && item.nominated) return {
        cursor: 'not-allowed',
        color: 'gray',
        transform: 'scale(1)'
    }
}