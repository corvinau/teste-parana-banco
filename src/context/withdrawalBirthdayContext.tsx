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
      setUserWithdrawalBirthday(userFgtsBalace);
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
