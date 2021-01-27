---
to: src/components/<%= h.inflection.classify(name) %>/<%= h.inflection.classify(name) %>Styles.tsx
---
<% formattedName = h.inflection.classify(name) -%>
import styled from '@emotion/styled';

interface StyleProps {
  textColor: string;
}

export const <%= formattedName %>Styles = styled('div')<StyleProps>`
    h2, h3 {
        color: ${(props) => props.textColor || '#000000'}
    }
`;
