import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface UserInfoContextType {
  userName: string;
  userFgtsBalace: number | undefined;
  userWithdrawalBirthday: number | undefined;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setUserFgtsBalace: React.Dispatch<React.SetStateAction<number | undefined>>;
  setUserWithdrawalBirthday: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

interface WithdrawalBirthdayProviderProps {
  children: ReactNode;
}

export default function WithdrawalBirthdayProvider({
  children,
}: WithdrawalBirthdayProviderProps) {
  const [userName, setUserName] = useState<string>('');
  const [userFgtsBalace, setUserFgtsBalace] = useState<number | undefined>(
    undefined
  );
  const [userWithdrawalBirthday, setUserWithdrawalBirthday] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    if (userFgtsBalace !== undefined) {
      if (userFgtsBalace <= 500) {
        setUserWithdrawalBirthday(userFgtsBalace * 0.5);
      } else if (userFgtsBalace <= 1000) {
        setUserWithdrawalBirthday(userFgtsBalace * 0.4 + 50);
      } else if (userFgtsBalace <= 5000) {
        setUserWithdrawalBirthday(userFgtsBalace * 0.3 + 150);
      } else if (userFgtsBalace <= 10000) {
        setUserWithdrawalBirthday(userFgtsBalace * 0.2 + 650);
      } else if (userFgtsBalace <= 15000) {
        setUserWithdrawalBirthday(userFgtsBalace * 0.15 + 1150);
      } else if (userFgtsBalace <= 20000) {
        setUserWithdrawalBirthday(userFgtsBalace * 0.1 + 1900);
      } else {
        setUserWithdrawalBirthday(userFgtsBalace * 0.05 + 2900);
      }
    }
  }, [userFgtsBalace, setUserWithdrawalBirthday]);

  return (
    <UserInfoContext.Provider
      value={{
        userName,
        setUserName,
        userFgtsBalace,
        setUserFgtsBalace,
        userWithdrawalBirthday,
        setUserWithdrawalBirthday,
      }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export function useWithdrawalBirthday(): UserInfoContextType {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error(
      'useWithdrawalBirthday deve ser usado dentro de um withdrawalBirthdayProvider'
    );
  }
  return context;
}
