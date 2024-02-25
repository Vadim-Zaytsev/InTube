export function formAssembly(formInstance) {
    const root = formInstance.section;
    const container = formInstance.container;
    const formBlockWrapper = formInstance.formBlockWrapper;
    const formBlock = formInstance.formBlock;
    const formBlockBtn = formInstance.formBlockBtn;
    const formTitle = formInstance.formTitle;
    const formWrapper = formInstance.formWrapper;
    const formLogin = formInstance.formLogin;
    const formRegistration = formInstance.formRegistration;

    root.append(container);
    container.append(formBlockWrapper);
    formBlockWrapper.append(formBlock);
    formBlock.append(formBlockBtn);
    formBlock.append(formTitle);
    formBlock.append(formWrapper);
    formWrapper.append(formLogin);
    formWrapper.append(formRegistration);

    return root;
}
