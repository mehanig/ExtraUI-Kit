import * as React from "react";

const base64RActive = "base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAktJREFUSA3dVj2PYWEUPgYbESqR2AlRK/gBFGpiK4laK/sD5keod/wBlXbF1iIUolJQi2R3CxIJGclae+c8J87MyzX35tLtSY5z3vPxPO8XL6L/TXzGgtSHVd9Ie3ItroZCxCog7EOj0fgSDAa/WZb1KCU3fvh8vp+Hw+Frq9X6zhD/WK2AgRXgguf9fv+ZiYywd5dxHnnCz9z5g/UPEB7wwYIVBXkWd5MADBMFFjBZZddMIv+9KwGJygnLz2MhMrdOAloIm8/nqVAomCFqNpsyrtVqNJvNaD6f0/F4PKsxBm+YuiIj9+6ORiOaTCbvAcNLp9NUKpUIhOFw2Mhcdx2J0BKPx692drtd2mw2lEwmqVqtXq0xg45EuVyOMPPtdkvj8djsky1rt9tClkgkKJvNnuUvB65EaOj3+6LD4fCsn78KNBgMJJbJZM5ylwNHolgsJvXL5VIszuxSFouFhD7aYq13JNIiJ+v34wYTBQLmBbZ3OBKt12vpSKVS9s5TRHNa+1GhI9F0OpW+YrFIoVDIhoEYchCttRWdAq5EOINoNEr1ep1w4JFIRBQ+Ysihxo3IeWN5Nr1ej8rlslzzSqVimzBIUOMmrkS73Y46nQ7hOwXVm4gzwSrcVqITcCXSQi+g2mNaxzMyC+/1TSK8dr/uBTT6gfX2gioRAsfVavXE78hvo/gmFxjAAiarkOl7AfuJNcKK33z4mmPXkwAYz/cL6+7kWwoGi9XhcuD5xe+K5tj1JLI73HFg/csqf05MMPVh1Wf3JgGZbJnaV3L/xOY6hc3DAAAAAElFTkSuQmCC";
const base64RInactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAV5JREFUOBHtUj1LxEAQvUskBOzE0n8gCDaCjYj6I0RsxCV9Gi0sPNuDq9IlOSs/foFdOPwTlnZi4y8IksT3lp1j3d1O7G5gmZk3b95uZjIareyvExi7AlmWTfq+v7Xxuq41TynVxHH8OAzDQ1mW3zZH4kgC8SBOEM8kd/xx13X3uLDBxZtOTaeeIG4fw3ZDZGBnqL3DH0D0hVyX5wniZgXiERo/cKZ2Az79OU3TfSO6B+6FXWfsCQK7ZAGiV1VVXUdRdMdcrCiKL2A3zME5FVx8SHCbRTS90puZMlxakiQLk+wsQROEBF2Ol7dtu0YQn77uFkOCbyRh6IcuWXKrprmC04cE5yxwIXmebzC2jZi1LM21697a+Stge41smsuRefJlFAO2Bb/AfE/gB1vQeyEJOOdsYCPITxD65GEsYobzS4zC3gsJ0tDIlyqE/I305uE5szleVvNixCv7hwn8ABlpifE2JIhyAAAAAElFTkSuQmCC";
const base64LActive = "base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAjdJREFUSA3dVj2LIkEQLXd0EdFIBHdRTNXAv2AuLgb+AVO5WO6X7PoHjEwPvFj8CMTIxFiE3Q0UBGWF8+5m69VZ0nPqDONkW1BWddfr97qne6Yl+moWMhakOaLmRtlXajMaDpOohIh3zWbzKRKJPNu2/SiQG39CodDr4XD41m63fzDFX3Y7bHCFGfCy3+8fWMjo9p8yzyNP+IVH/mT/BYY7/LBhRRGeRWARkGGi4AInuzw1U8gKuhKIqB25LG6LkPnopEOBZrQsiwqFAhWLRep2u1JqtVomhEajEY3HY0cfN06cptD/IGnHYjGq1WqUyWQu1tE5nU4viTjwnkL1ep3S6TRtNhsaDoeOwdpIpVKaXo26RxcBpVLpJNLpdGg+nztwk8mEttst5XI5AtbNXIXy+byMHQwGxMfewYM96ff74igEEtJHslgsHCJo6MYvl0upJZPJM4zZ4bqicPjfFuLUBTVXofV6LfzZbPaqjtYUew3oKjSbzWRcuVymaDR6xoE+1GCKPQMdOzyFsD+JRIIajYa8tPF4nOB4gdGHGjBeQp7vUa/Xo0qlIke4Wq2eTRgiwHiZp9But5PPDo4vXE8X9gSr8FqJTsBTSIF+SHWMGV33yAQGzU0h3HZvQQmN8eA63aAqhI4/q9XqO98j7wb4phQc4AInu4jpfYF4zx5njx1zrXHTl4EY1/cH++6Y20qGiNXhcOD6xTdHa5z6Mnk6POLA/ptd/pyYZJojas7pTQYxeWQaPwF+NcEV2f+EPQAAAABJRU5ErkJggg==";
const base64LInactive = "base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAVpJREFUOBHtUrFKxEAQvV00BOzE0j8QBBvB5hC5fxD0Kk3SpzkLG20PrkqX5FqtLO3k8Ccs7cTGL0iRxPfCDswle9W1t7A3s++9ebeZ2dFot7btgNlkkCTJvjFmWtf1bVmWE+qiKGq13lr7nOf5k8b29EFymB01TfOG81gwT1z0zaixfWHbtgZm78DHuOE34k1fwzO4M2r73MAwjuM7iM5pFobhBT73VRcBn2P/wOwKXxJpjvnAENh1R1j7mGXZH3NZ7FlRFA8wmznsXjiJPsNTkkEQrEQkUXoG40+HnQgncWCIzzkgWVWVd2BSuCkODCH8ohiDuWT0LcV1Wq3xGS4pYPPTND3UYubEyDm802rNYOx8CpjeB6fopjmTnvFmNAN3jLhCTyeI649duzOnAHvKAhYCeoHRLzdzMXOaNbOunj++hULelO+MT0OmyZ4tcbOSf+yr22Hbd+AfYot/Shdo6t0AAAAASUVORK5CYII=";

class RotationsRActive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64RActive}/>
    );
  }
}

class RotationsRInactive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64RInactive}/>
    );
  }
}

class RotationsLActive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64LActive}/>
    );
  }
}

class RotationsLInactive extends React.Component<{}, {}> {
  public render() {
    return (
      <img src={"data:image/png;" + base64LInactive}/>
    );
  }
}

export { RotationsRActive, RotationsRInactive, RotationsLActive, RotationsLInactive};
