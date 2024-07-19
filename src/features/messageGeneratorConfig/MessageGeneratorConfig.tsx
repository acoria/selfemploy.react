import { useCallback, useEffect, useState } from "react";
import { IApplyMessageConfig } from "../../core/types/IApplyMessageConfig";
import { useSettings } from "../../hooks/useSettings";
import { HourlyRateConfig } from "../HourlyRateConfig/HourlyRateConfig";
import { ApplicantNumber } from "../applicantNumberConfig/ApplicantNumber";
import { ApplicantNumberConfig } from "../applicantNumberConfig/ApplicantNumberConfig";
import { ApplicationMediumConfig } from "../applicationMediumConfig/ApplicationMediumConfig";
import { ApplicationMedium } from "../applicationMediumConfig/types/ApplicationMedium";
import { ApplicationOriginConfig } from "../applicationOriginConfig/ApplicationOriginConfig";
import { ApplicationTextConfig } from "../applicationTextConfig/ApplicationTextConfig";
import { AvailabilityConfig } from "../availabilityConfig/AvailabilityConfig";
import { Farewell } from "../farewellConfig/Farewell";
import { FarewellConfig } from "../farewellConfig/FarewellConfig";
import { LanguageConfig } from "../languageConfig/LanguageConfig";
import { Language } from "../languageConfig/types/Language";
import { SalutationConfig } from "../salutationConfig/SalutationConfig";
import { IMessageGeneratorConfigProps } from "./IMessageGeneratorConfigProps";

export const MessageGeneratorConfig: React.FC<IMessageGeneratorConfigProps> = (
  props
) => {
  const [settings] = useSettings();
  const [applyMessageConfig, setApplyMessageConfig] =
    useState<IApplyMessageConfig>({
      salutation: "",
      language: Language.DE,
      applicantNumber: ApplicantNumber.SINGLE,
      applicationMedium: ApplicationMedium.WEBSITE,
      applicationOrigin: undefined,
      applicationTexts: [],
      availableFrom: undefined,
      hourlyRate: undefined,
      farewell: {
        farewell: Farewell.POLITE,
        name: settings.yourName,
      },
    });

  useEffect(() => {
    props.onApplyMessageConfigChange(applyMessageConfig);
  }, [applyMessageConfig]);

  return (
    <>
      <LanguageConfig
        onChange={(language) =>
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            language,
          }))
        }
        initialValue={applyMessageConfig.language}
      />
      <ApplicantNumberConfig
        initialValue={applyMessageConfig.applicantNumber}
        onChange={(applicantNumber) =>
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            applicantNumber,
          }))
        }
      />
      <SalutationConfig
        onChange={(salutation) =>
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            salutation,
          }))
        }
      />
      <ApplicationTextConfig
        applicationTexts={settings.applicationTexts}
        onChange={useCallback((applicationTexts: string[]) => {
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            applicationTexts: applicationTexts,
          }));
        }, [])}
      />
      <ApplicationMediumConfig
        initialValue={applyMessageConfig.applicationMedium}
        onChange={(applicationMedium) =>
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            applicationMedium,
          }))
        }
      />
      <ApplicationOriginConfig
        onChange={(applicationOrigin) =>
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            applicationOrigin,
          }))
        }
      />
      <AvailabilityConfig
        initialValue={false}
        onChange={(availableFrom) =>
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            availableFrom,
          }))
        }
      />
      <HourlyRateConfig
        initialValue={false}
        onChange={(hourlyRate) =>
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            hourlyRate,
          }))
        }
      />
      <FarewellConfig
        initialFarewell={applyMessageConfig.farewell}
        onChange={(farewell) =>
          setApplyMessageConfig((applyMessage) => ({
            ...applyMessage,
            farewell,
          }))
        }
      />
    </>
  );
};
