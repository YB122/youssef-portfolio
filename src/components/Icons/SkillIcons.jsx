// src/components/ui/ServiceIcons.jsx
import { siNestjs, siRabbitmq, siNextdotjs, siVuedotjs, siNodedotjs, siReact, siMongodb, siTailwindcss, siTypescript, siJavascript, siC, siCplusplus, siGit, siGraphql, siOpenapiinitiative, siSocketdotio, siAngular, siMysql, siPostgresql } from 'simple-icons';
export const ReactIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siReact.path} />
  </svg>
);

export const NextjsIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siNextdotjs.path} />
  </svg>
);

export const VueIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siVuedotjs.path} />
  </svg>
);

export const NodejsIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siNodedotjs.path} />
  </svg>
);

export const MongoIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siMongodb.path} />
  </svg>
);

export const TailwindIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siTailwindcss.path} />
  </svg>
);

export const TypeScriptIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siTypescript.path} />
  </svg>
);

export const GitIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siGit.path} />
  </svg>
);

export const JavaScriptIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siJavascript.path} />
  </svg>
);

export const CIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siC.path} />
  </svg>
);

export const CppIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siCplusplus.path} />
  </svg>
);

// OOP — three connected class boxes
export const OopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
    {/* parent class box */}
    <rect
      x="8"
      y="2"
      width="8"
      height="5"
      rx="1.5"
      stroke="#888"
      strokeWidth="1.5"
      fill="none"
    />
    {/* left child box */}
    <rect
      x="2"
      y="17"
      width="8"
      height="5"
      rx="1.5"
      stroke="#888"
      strokeWidth="1.5"
      fill="none"
    />
    {/* right child box */}
    <rect
      x="14"
      y="17"
      width="8"
      height="5"
      rx="1.5"
      stroke="#888"
      strokeWidth="1.5"
      fill="none"
    />
    {/* vertical line down from parent */}
    <line
      x1="12"
      y1="7"
      x2="12"
      y2="13"
      stroke="#888"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* horizontal connector */}
    <line
      x1="6"
      y1="13"
      x2="18"
      y2="13"
      stroke="#888"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* line to left child */}
    <line
      x1="6"
      y1="13"
      x2="6"
      y2="17"
      stroke="#888"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* line to right child */}
    <line
      x1="18"
      y1="13"
      x2="18"
      y2="17"
      stroke="#888"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const GrpcIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm3.3 7.3L12 12.6 8.7 9.3 7.3 10.7 12 15.4l4.7-4.7-1.4-1.4z"/>
  </svg>
);

export const AngularIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siAngular.path} />
  </svg>
);

export const RabbitMQIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siRabbitmq.path} />
  </svg>
);

export const NestIcon = ({ size = 28 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="#888"
  >
    <path d={siNestjs.path} />
  </svg>
);

export const JavaIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.323.646-4.709 2.019-10.655-.117-6.945-1.149zM8.276 15.933s-1.028.761.542.925c2.032.209 3.636.226 6.413-.307 0 0 .384.389.987.602-5.695 1.666-12.044.13-7.942-1.22zM13.116 11.475c1.162 1.337-.305 2.542-.305 2.542s2.951-1.524 1.596-3.432c-1.265-1.784-2.235-2.67 3.017-5.727 0 0-8.267 2.061-4.308 6.617z"/>
    <path d="M16.845 20.165s.679.56-.747.994c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.999.527-.115.828-.094.828-.094-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.821zM9.292 13.21s-4.362 1.036-1.544 1.412c1.19.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.636.272-1.096.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.774-.892 3.774-.892zM17.116 14.074c4.504-2.34 2.421-4.589.968-4.287-.355.074-.514.138-.514.138s.132-.207.385-.297c2.875-1.011 5.086 1.981-1.086 3.931 0 0 .194-.174.247-.485zM12.174.002s2.247 2.247-2.129 5.702c-3.494 2.758-.797 4.332-.001 6.129-2.039-1.838-3.535-3.457-2.531-4.966 1.475-2.238 5.558-3.323 4.661-6.865z"/>
  </svg>
);

export const RestApiIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siOpenapiinitiative.path} />
  </svg>
);

export const WebSocketIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siSocketdotio.path} />
  </svg>
);

export const GraphQLIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siGraphql.path} />
  </svg>
);

export const MysqlIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siMysql.path} />
  </svg>
);

export const SqlServerIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#888" strokeWidth="1.5" fill="none"/>
    <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#888" strokeWidth="1.5" fill="none"/>
    <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#888" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const PostgresIcon = ({ size = 28 }) => (
  <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="#888">
    <path d={siPostgresql.path} />
  </svg>
);
