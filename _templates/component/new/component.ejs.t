---
to: src/components/<%= h.inflection.classify(name) %>/<%= h.inflection.classify(name) %>.tsx
---
<% formattedName = h.inflection.classify(name) -%>
import { FC } from "react";

interface Props {
  prop1?: any;
}

/**
 * <%= formattedName %>
 * Describe any relevant information regarding this component
 */
export const <%= formattedName %>:FC<Props> = ({ prop1 }) => {
    return (
      <div className="<%= h.inflection.dasherize(name) %>">
        <h1>Hola! <%= formattedName %> Created!</h1>
      </div>
    );
}

