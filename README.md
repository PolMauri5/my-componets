## RoundedButton

El componente `RoundedButton` es un botón redondeado que puede ser personalizado en tamaño y estado. Es ideal para usar en aplicaciones móviles desarrolladas con React Native.

### Propiedades

- **`icon`** (`React.ReactElement`): El icono que se mostrará dentro del botón. Debe ser un `ReactElement` que acepte un prop `color` para cambiar el color del icono.

- **`size`** (`'sm' | 'md' | 'lg'`): Tamaño del botón. Los tamaños disponibles son:
  - `'sm'`: Tamaño pequeño (40x40).
  - `'md'`: Tamaño mediano (60x60).
  - `'lg'`: Tamaño grande (80x80).
  - **Valor predeterminado**: `'md'`.

- **`state`** (`'default' | 'focused' | 'disabled'`): Estado del botón. Los estados disponibles son:
  - `'default'`: Estado normal.
  - `'focused'`: Estado cuando el botón está enfocado.
  - `'disabled'`: Estado cuando el botón está deshabilitado.
  - **Valor predeterminado**: `'default'`.

- **`onPress`** (`() => void`): Función que se ejecutará cuando el botón sea presionado. Este prop es obligatorio.

### Estilos

El botón tiene diferentes estilos según el estado:
- **Estado `'default'`**: Sombra sutil y color de fondo ligeramente opaco.
- **Estado `'focused'`**: Sombra más pronunciada y color de fondo más transparente.
- **Estado `'disabled'`**: El botón no se puede presionar y el icono tiene un color más claro.

### Ejemplo de Uso

```jsx
import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Asegúrate de instalar esta biblioteca o la que uses en tu caso

import RoundedButton from './RoundedButton'; // Ajusta la ruta según la ubicación de tu componente

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RoundedButton
        icon={<MaterialIcons name="favorite" size={24} color="white" />}
        size="md"
        state="default"
        onPress={() => alert('Button Pressed')}
      />
      <RoundedButton
        icon={<MaterialIcons name="star" size={24} color="white" />}
        size="lg"
        state="focused"
        onPress={() => alert('Button Pressed')}
      />
      <RoundedButton
        icon={<MaterialIcons name="settings" size={24} color="white" />}
        size="sm"
        state="disabled"
        onPress={() => alert('Button Pressed')}
      />
    </View>
  );
};

export default App;
