const buttonsVariants = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.5,
        }
    }),
    hidden: {
        opacity: 0,
        y: 100
    }
};

export { buttonsVariants };