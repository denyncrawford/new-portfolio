import { VNode } from "preact";

export const LinkTo = (props: {
  to: string;
  internal?: boolean;
  children: VNode | string;
  class?: string;
}) => {
  const { to, internal, children } = props;
  return (
    <a
      target={internal ? "_self" : "_blank"}
      href={to}
      class={props.class}
    >
      {children}
    </a>
  );
};
