export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = {};
    for (const key in formData) {
        trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : '';
    }

    // Validate title
    if (!trimmedFormData.title) {
        errors.title = 'El título es requerido.';
    } else if (trimmedFormData.title.length < 3) {
        errors.title = 'El título debe tener al menos 3 caracteres.';
    } else if (trimmedFormData.title.length > 200) {
        errors.title = 'El título no puede tener más de 200 caracteres.';
    }

    // Validate category
    if (!trimmedFormData.category) {
        errors.category = 'El equipo es requerido.';
    }

    // Validate photo URL
    if (!trimmedFormData.photo) {
        errors.photo = 'La URL de la foto es requerida.';
    }

    // Validate video URL
    if (!trimmedFormData.link) {
        errors.link = 'La URL del video es requerida.';
    } 

    // Validate description
    if (!trimmedFormData.description) {
        errors.description = 'La descripción es requerida.';
    } else if (trimmedFormData.description.length < 3) {
        errors.description = 'La descripción debe tener al menos 3 caracteres.';
    } else if (trimmedFormData.description.length > 500) {
        errors.description = 'La descripción no puede tener más de 500 caracteres.';
    }

    return errors;
};

